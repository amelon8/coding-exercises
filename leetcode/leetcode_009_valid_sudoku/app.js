/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

  //console.log("Validate the rows.");
  for (let row = 0; row < 9; row++) {
    let unique_num = [false, false, false, false, false, false, false, false, false];
    for (let column = 0; column < 9; column++) {
      let c = board[row][column];
      if (c === '.')
        continue;
      let idx = parseInt(c) - 1;
      if (unique_num[idx] == false)
        unique_num[idx] = true;
      else
        return false;
    }
    //console.log("row: " + (row+1), unique_num);
  }

  //console.log("Validate the columns.");
  for (let column = 0; column < 9; column++) {
    let unique_num = [false, false, false, false, false, false, false, false, false];
    for (let row = 0; row < 9; row++) {
      let c = board[row][column];
      if (c === '.')
        continue;
      let idx = parseInt(c) - 1;
      if (unique_num[idx] == false)
        unique_num[idx] = true;
      else
        return false;
    }
    //console.log("column: " + (column+1), unique_num);
  }

  //console.log("Validate the 3x3 sub-boxes.");
  for (let i = 0; i < 3; i ++) {
    for (let j = 0; j < 3; j++) {
      let unique_num = [false, false, false, false, false, false, false, false, false];
      for (let column = i*3; column < i*3+3; column++) {
        //for (let row = j*3; row < (j*3)+3; row++) {
        for (let row = j*3; row < j*3+3; row++) {
          // console.log("column:" + column + " row:" + row);
          let c = board[row][column];
          if (c === '.')
            continue;
          let idx = parseInt(c) - 1;
          if (unique_num[idx] == false)
            unique_num[idx] = true;
          else
            return false;
        }
      }
      // console.log(unique_num);
    }
  }

  return true;
};

function assert(condition, message) {
  if (!condition) {
      message = message || "Assertion failed";
      if (typeof Error !== "undefined") {
          throw new Error(message);
      }
      throw message; // Fallback
  }
}

assert(isValidSudoku([
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]) === true);

/*
assert(isValidSudoku([
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]) === false);
*/