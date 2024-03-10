import { LinkedList } from "./linked-list.js";

("use strict");
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (Array.isArray(vertex) == true) vertex = vertex.join("");
    if (!this.adjacencyList[vertex])
      this.adjacencyList[vertex] = [{ dV: Infinity }];
  }

  addEdge(vertex1, vertex2) {
    if (Array.isArray(vertex1) == true) vertex1 = vertex1.join("");
    if (Array.isArray(vertex2) == true) vertex2 = vertex2.join("");
    this.adjacencyList[vertex1].push([vertex2]);
    this.adjacencyList[vertex2].push([vertex1]);
  }

  addWeight(vertex1, vertex2, weight) {
    if (Array.isArray(vertex1) == true) vertex1 = vertex1.join("");
    if (Array.isArray(vertex2) == true) vertex2 = vertex2.join("");
    let indexV1 = this.adjacencyList[vertex2].findIndex((e) => e[0] == vertex1);
    let indexV2 = this.adjacencyList[vertex1].findIndex((e) => e[0] == vertex2);
    this.adjacencyList[vertex1][indexV2].push(weight);
    this.adjacencyList[vertex2][indexV1].push(weight);
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

function relaxation(dU, weight, dV) {
  if (dU + weight < dV) {
    return true;
  } else {
    return false;
  }
}

function dijkstra(vertex1, vertex2, adjacencyList) {
  if (Array.isArray(vertex1) == true) vertex1 = vertex1.join("");
  if (Array.isArray(vertex2) == true) vertex2 = vertex2.join("");
  adjacencyList[vertex1][0].dV = 0;
  let q = [];
  adjacencyList[vertex1].forEach((e) => {
    if (Array.isArray(e) == true) {
      adjacencyList[e[0]][0].dV = e[1];
      q.push(e[0]);
    }
  });

  let allpaths = [];
  let v = adjacencyList[q[0]];
  while (q.length > 0) {
    for (let i = 0; i < v.length; i++) {
      if (Array.isArray(v[i]) == true && v[i].includes("V")) {
        continue;
      }
      if (Array.isArray(v[i]) == true) {
        allpaths.push[q[0]];
        allpaths.push(v[i][0]);
        let dU = v[0].dV;
        let w = v[1];
        let dV = adjacencyList[v[i][0]].dV;
        if (relaxation(dU, w, dV) == true) {
          dV = dU + w;
        }
        v[i].push("V");
        let indexV1 = adjacencyList[v[i][0]].findIndex((e) => e[0] == q[0]);
        adjacencyList[[v[i][0]]][indexV1].push("V");
        if (v[i] == vertex2) break;
      }
    }
    q.shift();
    v = adjacencyList[q[0]];
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("A", "B");
graph.addWeight("A", "B", 10);
graph.addEdge("B", "E");
graph.addWeight("B", "E", 5);
graph.addEdge("A", "D");
graph.addWeight("A", "D", 6);
graph.addEdge("A", "C");
graph.addWeight("A", "C", 2);
graph.addEdge("E", "D");
graph.addWeight("E", "D", 9);
graph.addEdge("C", "D");
graph.addWeight("C", "D", 4);
let list = graph.adjacencyList;
console.log(list);
dijkstra("A", "E", list);
