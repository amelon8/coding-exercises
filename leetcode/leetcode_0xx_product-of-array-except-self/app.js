
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  for (let i=0; i < nums.length; i++) {

  }
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

console.log(productExceptSelf([1,2,3,4]));  // Output: [24,12,8,6]
