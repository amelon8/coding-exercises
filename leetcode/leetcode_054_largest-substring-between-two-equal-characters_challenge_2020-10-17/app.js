/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
  let longest = -1;
  for (let i=0; i < s.length; i++) {
    for (let j=s.length-1; j >= 0; j--) {
      if (s[i] === s[j]) {
        let len = j - (i+1);
        if (len > longest) {
          longest = len;
        }
      }
    }
  }
  return longest;
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

assert(maxLengthBetweenEqualCharacters("aa") === 0);
assert(maxLengthBetweenEqualCharacters("abca") === 2);
assert(maxLengthBetweenEqualCharacters("cbzxy") === -1);
assert(maxLengthBetweenEqualCharacters("cabbac") === 4);
