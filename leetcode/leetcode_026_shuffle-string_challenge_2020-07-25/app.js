/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  let strMap = {};
  let shuffledStr = "";
  for (let i=0; i < indices.length; i++) {
    strMap[indices[i]] = s[i];
  }
  // console.log(strMap);
  for (let i=0; i < indices.length; i++) {
    shuffledStr += strMap[i];
  }
  // console.log(shuffledStr);
  return shuffledStr;
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

assert(restoreString("codeleet", [4,5,6,7,0,2,1,3]) === "leetcode");
assert(restoreString("abc", [0,1,2]) === "abc");
assert(restoreString("aiohn", [3,1,4,2,0]) === "nihao");
assert(restoreString("aaiougrt", [4,0,2,6,7,3,1,5]) === "arigatou");
assert(restoreString("art", [1,0,2]) === "rat");
