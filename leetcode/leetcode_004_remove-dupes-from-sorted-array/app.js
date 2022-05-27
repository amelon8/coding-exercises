/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (var i = 1; i < nums.length; ) {
    if (nums[i] == nums[i-1])
      nums.splice(i-1, 1);
    else
      i++;
  }
  return nums.length;
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

assert(removeDuplicates([1,1,2]) == 2);
assert(removeDuplicates([0,0,1,1,1,2,2,3,3,4]) == 5);
