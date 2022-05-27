/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let maxHappyChildren = 0;
  let gIdx = 0;
  let sIdx = 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  console.log("g:", g);
  console.log("s:", s);

  while (gIdx < g.length && sIdx < s.length) {
    console.log("gIdx:", gIdx, "sIdx:", sIdx, "g[gIdx]:", g[gIdx], "s[sIdx]:", s[sIdx], "maxHappyChildren:", maxHappyChildren);
    if (s[sIdx] >= g[gIdx]) {
      maxHappyChildren++;
      gIdx++;
    }
    sIdx++;
  }

  console.log("maxHappyChildren:", maxHappyChildren);
  return maxHappyChildren;

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

assert(findContentChildren([1,3,2], [1,1]) === 1);
assert(findContentChildren([2,1], [2,3,1]) === 2);
assert(findContentChildren([3,2,1], [2,3,1,4,5]) === 3);
assert(findContentChildren([10,9,8,7], [5,6,7,8]) === 2);