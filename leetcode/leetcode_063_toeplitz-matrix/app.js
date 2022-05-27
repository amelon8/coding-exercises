/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  let col = [];
  let row = [];
  for (let j=0; j < matrix.length; j++)
    col[j] = matrix[j][0];
    for (let i=0; i < matrix[0].length; i++)
    row[i] = matrix[0][i];
  console.log("col:", col, "row:", row);

  for (let j=1; j < matrix.length; j++) {
    for (let i=1; i < matrix[0].length; i++) {
      let matchElement = -1;
      if (j >= i) {
        matchElement = col[j-i];
      } else {
        matchElement = row[i-j];
      }
      console.log("j:", j, "i:", i, "matrix[j][i]:", matrix[j][i], "matchElement:", matchElement);
      if (matrix[j][i] !== matchElement)
        return false;
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

assert(isToeplitzMatrix(
    [[1,2,3,4],
     [5,1,2,3],
     [9,5,1,2]]
  ) === true);
assert(isToeplitzMatrix(
    [[1,2],
     [2,2]]
  ) === false);
assert(isToeplitzMatrix(
    [[1,2],
     [2,1]]
  ) === true);
