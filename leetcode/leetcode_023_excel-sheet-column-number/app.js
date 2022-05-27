/**
 * @param {string} s
 * @return {number}
 */
const BASE = "A".charCodeAt() - 1;

function charToNum(c) {
  return c.charCodeAt() - BASE;
}

var titleToNumber = function(s) {
  let chars = s.split('');
  let column = 0;
  let j = 0;
  for (i=chars.length - 1; i >= 0; i--) {
    column += charToNum(chars[j++]) * (26**i);
  }
  // console.log("column:", column);
  return column;
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

assert(titleToNumber("A") === 1);
assert(titleToNumber("B") === 2);
assert(titleToNumber("C") === 3);
assert(titleToNumber("Z") === 26);
assert(titleToNumber("AA") === 27);
assert(titleToNumber("AB") === 28);
assert(titleToNumber("ZY") === 701);
