/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, 
// with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var counter = 0;  
  var solution;
  var board = new Board({n:n})

  var recursiveFunc = function(initRow){
    for (var col=0; col < n; col++){
      board.togglePiece(initRow, col);

      if (board.hasAnyRooksConflicts()){
        board.togglePiece(initRow, col)
      } else {
        counter++
        if (counter === n){
          solution = board.rows()
        } else {
          recursiveFunc(initRow+1)
        }
      }
    }
  }

  recursiveFunc(0);
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0
  var board = new Board({n:n});

  var recursiveFunc = function(initRow){
    if(initRow===n){
      solutionCount++
      return
    }

    for (var col = 0; col < n; col++){
      board.togglePiece(initRow, col);

      if (!board.hasAnyRooksConflicts()){
        recursiveFunc(initRow+1)
      }
      board.togglePiece(initRow, col)
    }
  }
  recursiveFunc(0)
  return solutionCount
};



// return a matrix (an array of arrays) representing a single nxn chessboard, 
// with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
