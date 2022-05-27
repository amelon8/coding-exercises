// Create a lookup table so we don't spend too much time
// recalculating for every new set of steps.
let lookup = {};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // It's essentially the Fibonacci sequence.
  if (n in lookup)
    return lookup[n];
  if (n === 1)
    return 1;
  else if (n === 2)
    return 2;
  else
    lookup[n] = climbStairs(n-1) + climbStairs(n-2);
    return lookup[n];
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

assert(climbStairs(1) === 1);
assert(climbStairs(2) === 2);
assert(climbStairs(3) === 3);
assert(climbStairs(4) === 5);
assert(climbStairs(5) === 8);
assert(climbStairs(6) === 13);
assert(climbStairs(7) === 21);
assert(climbStairs(8) === 34);
assert(climbStairs(9) === 55);
console.log("lookup:", lookup);