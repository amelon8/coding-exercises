/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N === 0)
    return 0;
  if (N === 1)
    return 1;
  return fib(N-1) + fib(N-2);
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

assert(fib(0) === 0);
assert(fib(1) === 1);
assert(fib(2) === 1);
assert(fib(3) === 2);
assert(fib(4) === 4);
assert(fib(5) === 5);
assert(fib(6) === 8);
assert(fib(7) === 13);
assert(fib(8) === 21);
assert(fib(9) === 34);
assert(fib(10) === 55);
