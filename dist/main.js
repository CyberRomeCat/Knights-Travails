/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _linked_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-list.js */ \"./src/linked-list.js\");\n\n\n(\"use strict\");\nclass Graph {\n  constructor() {\n    this.adjacencyList = {};\n  }\n\n  addVertex(vertex) {\n    if (Array.isArray(vertex) == true) vertex = vertex.join(\"\");\n    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];\n  }\n\n  addEdge(vertex1, vertex2) {\n    if (Array.isArray(vertex1) == true) vertex1 = vertex1.join(\"\");\n    if (Array.isArray(vertex2) == true) vertex2 = vertex2.join(\"\");\n    this.adjacencyList[vertex1].push([vertex2]);\n    this.adjacencyList[vertex2].push([vertex1]);\n  }\n\n  addWeight(vertex1, vertex2, weight) {\n    if (Array.isArray(vertex1) == true) vertex1 = vertex1.join(\"\");\n    if (Array.isArray(vertex2) == true) vertex2 = vertex2.join(\"\");\n    let indexV1 = this.adjacencyList[vertex2].findIndex((e) => e[0] == vertex1);\n    let indexV2 = this.adjacencyList[vertex1].findIndex((e) => e[0] == vertex2);\n    this.adjacencyList[vertex1][indexV2].push(weight);\n    this.adjacencyList[vertex2][indexV1].push(weight);\n  }\n\n  removeEdge(vertex1, vertex2) {\n    if (Array.isArray(vertex1) == true) vertex1 = vertex1.join(\"\");\n    if (Array.isArray(vertex2) == true) vertex2 = vertex2.join(\"\");\n    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(\n      (v) => v !== vertex2,\n    );\n    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(\n      (v) => v !== vertex1,\n    );\n  }\n\n  removeVertex(vertex) {\n    if (Array.isArray(vertex) == true) vertex = vertex.join(\"\");\n    while (this.adjacencyList[vertex].length) {\n      const adjacentVertex = this.adjacencyList[vertex].pop();\n      this.removeEdge(vertex, adjacentVertex);\n    }\n  }\n\n  print() {\n    for (const [vertex, edges] of Object.entries(this.adjacencyList)) {\n      console.log(`${vertex} -> ${edges.join(\", \")}`);\n    }\n  }\n}\n\nconst graph = new Graph();\ngraph.addVertex(\"A\");\ngraph.addVertex(\"B\");\ngraph.addVertex(\"C\");\ngraph.addVertex(\"D\");\ngraph.addVertex(\"E\");\ngraph.addEdge(\"A\", \"B\");\ngraph.addEdge(\"B\", \"E\");\ngraph.addEdge(\"A\", \"D\");\ngraph.addEdge(\"A\", \"C\");\ngraph.addEdge(\"E\", \"D\");\ngraph.addEdge(\"C\", \"D\");\n\n\n//# sourceURL=webpack://project-setup-template/./src/index.js?");

/***/ }),

/***/ "./src/linked-list.js":
/*!****************************!*\
  !*** ./src/linked-list.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LinkedList: () => (/* binding */ LinkedList)\n/* harmony export */ });\nclass LinkedList {\n  head = null;\n  tail = null;\n\n  prepend(value) {\n    if (this.head === null) {\n      this.head = new node(value);\n    } else {\n      let nextValue = this.head;\n      if (nextValue.next == null) {\n        this.tail = nextValue;\n      }\n      this.head = new node(value, nextValue);\n    }\n  }\n\n  append(value) {\n    if (this.head == null) {\n      prepend(value);\n    } else if (this.tail !== null) {\n      this.tail.next = new node(value);\n      this.tail = new node(value);\n    } else {\n      this.tail = new node(value);\n      this.head.next = new node(value);\n    }\n  }\n\n  size() {\n    let size = 0;\n    let node = this.head;\n    while (this.head != null) {\n      node = node.next;\n      size++;\n      if (node.next == null) {\n        size++;\n        break;\n      }\n    }\n    return size;\n  }\n\n  at(index) {\n    let size = 0;\n    let node = this.head;\n    while (this.head != null) {\n      node = node.next;\n      size++;\n      if (size === index) {\n        return node;\n      }\n    }\n  }\n\n  pop() {\n    let node = this.head;\n    while (this.head != null) {\n      if (\n        node.next.value === this.tail.value ||\n        node.next.value.key == this.tail.value.key\n      ) {\n        node.next = null;\n        this.tail = node;\n        break;\n      }\n      node = node.next;\n    }\n  }\n\n  contains(value) {\n    let node = this.head;\n    while (this.head != null) {\n      if (node.value.key == value || node.value == value) {\n        return true;\n      }\n\n      if (node.next == null) {\n        return false;\n      }\n      node = node.next;\n    }\n  }\n\n  find(value) {\n    let index = 0;\n    let node = this.head;\n    while (this.head != null) {\n      if (node.value.key == value || node.value == value) {\n        console.log(index);\n        break;\n      }\n\n      if (node.next == null) {\n        return null;\n      }\n      node = node.next;\n      index++;\n    }\n  }\n\n  toString() {\n    let string = `${this.head.value}`;\n    let node = this.head;\n    while (this.head != null) {\n      node = node.next;\n      if (node === null) {\n        string += \"-> \" + null;\n        return string;\n      }\n      string += \" -> \" + node.value;\n    }\n  }\n\n  ///Only if there is a key\n  changeValue(key, value) {\n    let node = this.head;\n    while (this.head != null) {\n      if (node.value.key == key) {\n        node.value.value = value;\n        break;\n      }\n      node = node.next;\n    }\n  }\n}\n\nclass node {\n  constructor(value = null, next = null) {\n    this.value = value;\n    this.next = next;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://project-setup-template/./src/linked-list.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;