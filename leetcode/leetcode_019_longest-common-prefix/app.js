/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = "";
  let minLength = (strs.length === 0) ? 0 : strs[0].length;

  // Get length of shortest string.
  for (let i=0; i < strs.length; i++)
    if (strs[i].length < minLength)
      minLength = strs[i].length;

  for (let i=1; i <= minLength; i++) {
    let newPrefix;
    for (let j=0; j < strs.length; j++) {
      let temp = strs[j].substring(0, i);
      if (j === 0) {
        newPrefix = temp;
      } else {
        if (temp != newPrefix) {
          // console.log("prefix:" + prefix + " temp:" + temp + " newPrefix:" + newPrefix);
          return prefix;
        }
      }
    }
    prefix = newPrefix;
    // console.log("prefix:" + prefix);
  }
  return prefix;
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

assert(longestCommonPrefix(["flower","flow","flight"]) === "fl");
assert(longestCommonPrefix(["flower","flow","floor"]) === "flo");
assert(longestCommonPrefix(["dog","racecar","car"]) === "");
assert(longestCommonPrefix([]) === "");
assert(longestCommonPrefix(["abcdef"]) === "abcdef");
assert(longestCommonPrefix(["a"]) === "a");
assert(longestCommonPrefix(["c", "c"]) === "c");