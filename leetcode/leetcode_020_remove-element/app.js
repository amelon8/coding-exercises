/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for (i = 0; i < nums.length; )
    if (nums[i] === val)
      nums.splice(i, 1);
    else
      i++;
  console.log("length:" + nums.length + " nums:", nums);
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

assert(removeElement([3,2,2,3], 3) === 2);
assert(removeElement([0,1,2,2,3,0,4,2], 2) === 5);
