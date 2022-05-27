/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let j = 0;
  let count = 0;
  for (let i=0; i < s.length; i++) {
    while (s[i] !== t[j]) {
      j++;
      if (j > t.length) {
        return false;
      }
    }
    if (s[i] === t[j])
      j++;
      count++;
  }
  console.log("count:", count, "s.length:",  s.length);
  if (count <s.length)
    return false;
  else
    return true
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

assert(isSubsequence("aaa", "aaa") === true);
assert(isSubsequence("abc", "ahbgdc") === true);
assert(isSubsequence("axc", "ahbgdc") === false);
assert(isSubsequence("aaaaaa", "bbaaaa") === false);