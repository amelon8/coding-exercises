/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

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

assert(rob([1,2,3,1]) === 4);
assert(rob([2,7,9,3,1]) === 12);
