/**
 * @param {number} x
 * @return {number}
 */
const MAX_INT = 2**31-1;
const MIN_INT = -(2**31);
var reverse = function(x) {
  var reversed_int = 0;
  if (x === 0)
    return 0;
  while (Math.abs(x) % 10 === 0)
    x = x / 10;
  while (Math.abs(x) >= 10) {
    reversed_int = (reversed_int * 10) + (x % 10);
    if (reversed_int > MAX_INT || reversed_int < MIN_INT)
      return 0;   // overflow
    x = (x > 0) ? Math.floor(x / 10) : Math.ceil(x / 10);
  }
  reversed_int = reversed_int * 10 + x;
  if (reversed_int > MAX_INT || reversed_int < MIN_INT)
    return 0;   // overflow

  return reversed_int;
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

assert(reverse(10) == 1);
assert(reverse(100) == 1);
assert(reverse(1000) == 1);
assert(reverse(102) == 201);
assert(reverse(0) == 0);
assert(reverse(123) == 321);
assert(reverse(-123) == -321);
assert(reverse(120) == 21);
