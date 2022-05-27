/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  let matrixSize = mat.length;
  let sum = 0;
  for (let i=0; i < matrixSize; i++) {
    let i2 = matrixSize - 1 - i;
    // console.log("i:", i, "mat[i][i]:", mat[i][i], "mat[i2][i]:", mat[i2][i]);
    if (i === i2)
      sum += mat[i][i];
    else
    sum += mat[i][i] + mat[i2][i];
  }
  // console.log("sum:", sum);
  return sum;
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

assert(diagonalSum(
    [[1,2,3],
     [4,5,6],
     [7,8,9]]
  ) === 25);
assert(diagonalSum(
    [[1,1,1,1],
     [1,1,1,1],
     [1,1,1,1],
     [1,1,1,1]]
  ) === 8);
assert(diagonalSum(
    [[5]]
    ) === 5);
assert(diagonalSum(
    [[7,3,1,9],
     [3,4,6,9],
     [6,9,6,6],
     [9,5,8,5]]
  ) === 55);
