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

const KnightsMoves = (start, end) => {
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

  function allMovesGraph() {
    const graph = new Graph();
    let startMove = start;
    let visitedMoves = [startMove];
    let q = [startMove];
    while (q.length != 0) {
      let noCommaF = q[0].join("");
      graph.addVertex(q[0]);
      for (let i = 0; i < moves.length; i++) {
        let move = [q[0][0] + moves[i][0], q[0][1] + moves[i][1]];
        let noComma = move.join("");
        if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) continue;
        if (graph.adjacencyList.hasOwnProperty(noComma)) {
          if (
            graph.adjacencyList[noCommaF].some((m) => m == noComma) == false
          ) {
            graph.addEdge(q[0], move);
          }
        } else {
          graph.addVertex(move);
          graph.addEdge(q[0], move);
          visitedMoves.push(move);
          q.push(move);
        }
      }
      q.shift();
      console.log(graph.adjacencyList);
    }

    return graph;
  }

  function BFS() {
    let graph = allMovesGraph();
    let startNode = start.join("");
    let visitedNodes = [startNode];
    let pathCost = {};
    pathCost[startNode] = [];
    let q = [];
    graph.adjacencyList[startNode].forEach((n) => {
      q.push([startNode, n[0], 1]);
    });
    while (q.length != 0) {
      let firstEl = q[0];
      if (pathCost.hasOwnProperty(firstEl[1]) == false) {
        pathCost[firstEl[1]] = [firstEl[0], firstEl[2]];
      }
      graph.adjacencyList[firstEl[1]].forEach((n) => {
        if (pathCost.hasOwnProperty(n[0]) == false) {
          q.push([firstEl[1], n[0], firstEl[2] + 1]);
        }
      });
      if (visitedNodes.some((n) => n == firstEl[0]) == false) {
        visitedNodes.push(firstEl[0]);
      }
      q.shift();
    }
    console.log(pathCost);
  }

  return { allMovesGraph, BFS };
};

let knight = KnightsMoves([0, 0]);
knight.BFS();
