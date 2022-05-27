// Notes: The way this problem is described - it tripped me up
// a bit. It took me some time to figure out that the input values
// they used in the examples are binary values and are not the actual
// inputs.
//
// For example, "00000000000000000000000000001011" is the binary number
// for decimal value 8.
//

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0
  // console.log("input n:", n);
  while (n > 0) {
    if (n & 1)
      count++;
    n = n >>> 1;  // Use bitwise shift with zero fill (from the left)
    // console.log("count:", count, "n:", n);
  }
  return count;
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

assert(hammingWeight(parseInt('00000000000000000000000000001011', 2)) === 3);
assert(hammingWeight(parseInt('00000000000000000000000010000000', 2)) === 1);
assert(hammingWeight(parseInt('11111111111111111111111111111101', 2)) === 31);