import { LinkedList } from "./linked-list.js";

class Node {
  constructor(vertex) {
    this.vertex = vertex;
    this.vertices = new LinkedList();
  }
}

let knightMoves = () => {
  let moves = [
    [2, -1],
    [2, 1],
    [1, -2],
    [1, 2],
    [-1, -2],
    [-1, 2],
    [-2, -1],
    [-2, 1],
  ];

  function graph(vertex) {
    let n = new Node(vertex);
    let nodeVerti = addVertices(n);
    return nodeVerti;
  }

  function addVertices(node, allMoves = []) {
    for (let i = 0; i < moves.length; i++) {
      let vertices = [
        node.vertex[0] + moves[i][0],
        node.vertex[1] + moves[i][1],
      ];
      if (vertices[0] > 0 && vertices[1] > 0) {
        allMoves.push(vertices);
        node.vertices.prepend(new Node(vertices));
      }
    }
    return node;
  }

  return { graph };
};

let moves = knightMoves();
let node = moves.graph([0, 0]);
console.log(node);

export { knightMoves };
