/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let unique = []
  for (let i=0; i < nums.length; i++) {
    // console.log("unique:", unique, "nums[i]:", nums[i], "nums:", nums);
    if (unique.includes(nums[i])) {
      return true;
    } else {
      unique.push(nums[i]);
    }
  }
  return false;
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

assert(containsDuplicate([1,2,3,1]) === true);
assert(containsDuplicate([1,2,3,4]) === false);
assert(containsDuplicate([1,1,1,3,3,4,3,2,4,2]) === true);
assert(containsDuplicate([1,2,3,4,5,6,7,8,9,10]) === false);
