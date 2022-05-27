/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let nums2 = nums.splice(nums.length - (k % nums.length), nums.length);
  // console.log("nums:", nums);
  // console.log("nums2:", nums2);
  nums.unshift(...nums2);
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

let nums;

nums = [1,2,3,4,5,6,7]
rotate(nums, 3);
console.log(nums);   // Output: [5,6,7,1,2,3,4]

nums = [-1,-100,3,99]
rotate(nums, 2);
console.log(nums);   // Output: [3,99,-1,-100]

nums = [1,2,3,4,5];
rotate(nums, 8);
console.log(nums);   // Output: [3,4,5,1,2]

