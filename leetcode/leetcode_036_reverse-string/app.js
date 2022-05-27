/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  for (let i=0; i < Math.floor(s.length / 2); i++) {
    let temp = s[i];
    let lastIdx = s.length - 1 - i;
    s[i] = s[lastIdx];
    s[lastIdx] = temp;
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

let s1 = ["h","e","l","l","o"];
reverseString(s1);  // s1: ["o","l","l","e","h"]
console.log("s1:", s1);

let s2 = ["H","a","n","n","a","h"];
reverseString(s2);  // s2: ["h","a","n","n","a","H"]
console.log("s2:", s2);
