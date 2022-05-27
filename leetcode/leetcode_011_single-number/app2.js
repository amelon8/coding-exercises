/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // Using dictionary lookup.
    let last_num = {};
    for (i = 0; i < nums.length; i++) {
      val = nums[i];
      if (val in last_num)
        delete last_num[val];
      else
        last_num[val] = 1;
    }
    return Number(Object.keys(last_num)[0]);
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

assert(singleNumber([2,2,1]) === 1);
assert(singleNumber([4,1,2,1,2]) === 4);
