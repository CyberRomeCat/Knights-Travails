# Knights-Travails

A knight in chess can move to any square depending on its move from a standard 8x8 chessboard. Its basic move is two steps forward and one step to the side or one step forward and two steps to the side. This project is from TOP to implement the learnings of data structure and algorithms.

## Assignment

My task is to write a function `KnightMoves()` that shows the shortest way possible to move from one square to the other by outputting all squares along the way.

**_Example:_**

```
knightMoves([0,0],[1,2]) == [[0,0],[1,2]]

knightMoves([0,0],[3,3]) == [[0,0],[2,1],[3,3]] or knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]

knightMoves([3,3],[0,0]) == [[3,3],[2,1],[0,0]] or knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]

knightMoves([0,0],[7,7]) == [[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]] or knightMoves([0,0],[7,7]) == [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]]

```
