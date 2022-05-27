/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // Using array lookup.
    let last_num = [];
    for (i = 0; i < nums.length; i++) {
      val = nums[i];
      idx = last_num.indexOf(val);
      if ( idx === -1)
        last_num.push(val);
      else
        last_num.splice(idx, 1);
    }
    return last_num[0];
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
assert(singleNumber([1,0,1]) === 0);
