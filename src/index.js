import { LinkedList } from "./linked-list.js";

("use strict");
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (Array.isArray(vertex) == true) vertex = vertex.join("");
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (Array.isArray(vertex1) == true) vertex1 = vertex1.join("");
    if (Array.isArray(vertex2) == true) vertex2 = vertex2.join("");
    this.adjacencyList[vertex1].push([vertex2]);
    this.adjacencyList[vertex2].push([vertex1]);
  }

  removeEdge(vertex1, vertex2) {
    if (Array.isArray(vertex1) == true) vertex1 = vertex1.join("");
    if (Array.isArray(vertex2) == true) vertex2 = vertex2.join("");
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2,
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1,
    );
  }

  removeVertex(vertex) {
    if (Array.isArray(vertex) == true) vertex = vertex.join("");
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
  }

  print() {
    for (const [vertex, edges] of Object.entries(this.adjacencyList)) {
      console.log(`${vertex} -> ${edges.join(", ")}`);
    }
  }
}

const KnightsMoves = (s, e) => {
  let moves = [
    [-1, 2],
    [1, 2],
    [-2, 1],
    [2, 1],
    [-2, -1],
    [2, -1],
    [-1, -2],
    [1, -2],
  ];

  function allMovesGraph(start = s) {
    const graph = new Graph();
    let startMove = start;
    let visitedMoves = [startMove];
    let q = [startMove];
    while (q.length != 0) {
      for (let i = 0; i < moves.length; i++) {
        let move = [q[0][0] + moves[i][0], q[0][1] + moves[i][1]];
        if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) continue;
        if (visitedMoves.some((e) => e[0] === move[0] && e[1] === move[1]))
          continue;
        graph.addVertex(q[0]);
        graph.addVertex(move);
        graph.addEdge(q[0], move);
        visitedMoves.push(move);
        q.push(move);
      }
      q.shift();
    }
    console.log(graph.adjacencyList);
    console.log(graph.print());
  }

  return { allMovesGraph };
};

KnightsMoves([3, 3]).allMovesGraph();
