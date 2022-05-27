/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let count = 0;
  let i = s.length - 1;

  while (s[i] === ' ' && i >= 0)
    i--;

  for ( ; s[i] !== ' ' && i >= 0; i--) {
    count++;
    // console.log("i:" + i + " s[i]:" + s[i] + " count:" + count);
  }
  // console.log("count:" + count);
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

assert(lengthOfLastWord("Hello World") === 5);
assert(lengthOfLastWord("Blah") === 4);
assert(lengthOfLastWord("a ") === 1);
