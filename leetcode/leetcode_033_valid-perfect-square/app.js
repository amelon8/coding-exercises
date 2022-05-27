/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  // Using the solution from (69) Sqrt(x).
  for (var i = 0; ; i ++) {
    i_square = i * i;
    if (i_square > num)
      return false;
    else if (i_square == num)
      return true;
  }
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

assert(isPerfectSquare(16) === true);
assert(isPerfectSquare(14) === false);
