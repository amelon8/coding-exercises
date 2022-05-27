/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var sortAlphabets = function(text) {
  return text.split('').sort().join('');
};

var isAnagram = function(s, t) {
  let s_sorted = sortAlphabets(s);
  let t_sorted = sortAlphabets(t);
  return s_sorted === t_sorted;
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

assert(isAnagram("anagram", "nagaram") === true);
assert(isAnagram("rat", "car") === false);
