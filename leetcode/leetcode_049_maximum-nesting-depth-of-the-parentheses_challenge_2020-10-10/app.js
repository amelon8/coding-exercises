/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
  let max = 0;
  let current = 0;
  let elements = s.split('');
  for (let i=0; i < elements.length; i++) {
    if (elements[i] === '(') {
      current++;
      if (current > max)
        max = current;
    }
    if (elements[i] === ')')
      current--;
  }
  return max;
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

assert(maxDepth("(1+(2*3)+((8)/4))+1") === 3);
assert(maxDepth("(1)+((2))+(((3)))") === 3);
assert(maxDepth("1+(2*3)/(2-1)") === 1);
assert(maxDepth("1") === 0);
