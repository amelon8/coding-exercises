let API_CALLS = 0;

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
let fourIsBadVersion = function(version) {
  API_CALLS++;
  return (version >= 4) ? true : false;
}

let fiveIsBadVersion = function(version) {
  API_CALLS++;
  return (version >= 5) ? true : false;
}

let nineIsBadVersion = function(version) {
  API_CALLS++;
  return (version >= 9) ? true : false;
}

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  return function(n) {
    API_CALLS = 0;
    let min = 0;
    let max = n;
    let middle = Math.ceil((max - min) / 2) + min;
    let lastBad = 0;

    while (middle < max) {
      let isBad = isBadVersion(middle);
      // console.log("min:", min, "max:", max, "middle:", middle, "isBad:", isBad);
      if (isBad) {
        max = middle;
        lastBad = max;
      } else {
        min = middle;
      }
      middle = Math.ceil((max - min) / 2) + min;
    }
    if (lastBad === 0)
      lastBad = n;
    else if (isBadVersion(lastBad-1))
      lastBad--;
    console.log("middle:", middle, "lastBad:", lastBad);
    console.log("API_CALLS:", API_CALLS);
    return lastBad;
  };
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

assert(solution(fourIsBadVersion)(5) === 4);
assert(solution(fiveIsBadVersion)(7) === 5);
assert(solution(fiveIsBadVersion)(40) === 5);
assert(solution(fiveIsBadVersion)(120) === 5);
assert(solution(nineIsBadVersion)(9) === 9);
assert(solution(nineIsBadVersion)(300) === 9);