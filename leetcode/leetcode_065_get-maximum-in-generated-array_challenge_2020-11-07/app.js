/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
  let a = [];
  console.log("a:", a);
  a[0] = 0;
  a[1] = 1;
  if (n === 0)
    return 0;
  if (n === 1)
    return 1;
  if (n === 2)
    return 1;
  for (i = 1; 2*i+1 <= n; i++) {
    if (2 <=2*i) {
      a[2*i] = a[i];
    }
    if (2 <=2*i+1) {
      a[2*i+1] = a[i] + a[i+1];
    }
    console.log("i:", i, "a:", a);
  }
  console.log("Max element in a:", Math.max(...a));
  return Math.max(...a);
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

assert(getMaximumGenerated(7) === 3);
assert(getMaximumGenerated(2) === 1);
assert(getMaximumGenerated(3) === 2);
assert(getMaximumGenerated(4) === 2);
