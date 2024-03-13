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

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("A", "B");
graph.addEdge("B", "E");
graph.addEdge("A", "D");
graph.addEdge("A", "C");
graph.addEdge("E", "D");
graph.addEdge("C", "D");
