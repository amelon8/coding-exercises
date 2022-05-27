/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let mapping = {};
  let firstUniqCharIdx = null;
  for (let i=0; i < s.length; i++) {
    if (s[i] in mapping)
      mapping[s[i]][0]++;
    else
      mapping[s[i]] = [1, i];
  }
  // console.table(mapping);
  Object.entries(mapping).forEach((entry) => {
    let count = entry[1][0];
    let idx = entry[1][1];
    if (count === 1 && (firstUniqCharIdx === null || firstUniqCharIdx > idx))
        firstUniqCharIdx = idx;
  });
  if (firstUniqCharIdx === null)
    firstUniqCharIdx = -1;
  console.log("Final firstUniqCharIdx:", firstUniqCharIdx);
  return firstUniqCharIdx;
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

assert(firstUniqChar("") === -1);                // no non-repeating char found
assert(firstUniqChar("lleettcccooddee") === -1); // no non-repeating char found
assert(firstUniqChar("leetcode") === 0);         // 'l' is non-repeating
assert(firstUniqChar("loveleetcode") === 2);     // 'v' is non-repeating
assert(firstUniqChar("loveleetcodelove") === 7); // 't' is non-repeating
