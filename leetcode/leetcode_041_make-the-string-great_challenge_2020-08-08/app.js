function isBad(c1, c2) {
  if (c1.toUpperCase() === c2.toUpperCase()) {
    if ( (c1 === c1.toUpperCase() && c2 == c2.toLowerCase()) ||
         (c1 === c1.toLowerCase() && c2 == c2.toUpperCase()) ) {
      return true
    }
  }
  return false;
}

/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
  if (s === "")
    return s;
  let isGood = false;
  while (isGood == false) {
    isGood = true;
    for (let i=0; i <= s.length - 2; i++) {
      if (isBad(s[i], s[i+1])) {
        s = s.replace(s[i]+s[i+1], "");
        isGood = false;
        console.log("s:", s);
        break;
      }
    }
  }
  console.log("final s:", s);
  return s;
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

assert(makeGood("") === "");
assert(makeGood("s") === "s");
assert(makeGood("leEeetcode") === "leetcode");
assert(makeGood("abBAcC") === "");
