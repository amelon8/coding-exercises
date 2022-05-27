/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i = 0;
  let last = nums.length;

  while (i < last) {
    if (nums[i] === 0) {
      let temp = nums.splice(i, 1)[0];
      nums.push(temp);
      last--;
    } else {
      i++;
    }
  }
  // console.log("nums:", nums);
  // return nums;
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

console.log(moveZeroes([0,1,0,3,12]));  // Output: [1,3,12,0,0]
console.log(moveZeroes([0,99,0,0,0]));  // Output: [99,0,0,0,0]
console.log(moveZeroes([0,99,0,0,1]));  // Output: [99,1,0,0,0]
