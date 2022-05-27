/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let len = nums.length;
  let numMap = {};
  for (let i=0; i < len; i++) {
    let val = nums[i];
    if (numMap[val] === undefined)
      numMap[val] = 1;
    else
      numMap[val]++;
  }
  // console.log("numMap:", numMap);

  for (const key in numMap) {
    // console.log("key:", key, ", numMap[key]:", numMap[key]);
    // console.log("Math.floor(len/2):", Math.floor(len/2));
    if (numMap[key] > Math.floor(len/2)) {
      // console.log("Found key:", key, ", value:", numMap[key]);
      return Number(key);
    }
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

assert(majorityElement([3,2,3]) === 3);
assert(majorityElement([2,2,1,1,1,2,2]) === 2);
