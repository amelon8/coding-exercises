/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let a = [];
  for (let i=0; i < nums.length; i++) {
    let c = 0;
    for (let j=0; j < nums.length; j++) {
      if (nums[i] > nums[j])
        c++;
    }
    a.push(c);
  }
  // console.log(a);
  return a;
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

assert(smallerNumbersThanCurrent([8,1,2,2,3]).toString() === "4,0,1,1,3");  // result: [4,0,1,1,3]
assert(smallerNumbersThanCurrent([6,5,4,8]).toString() === "2,1,0,3");  // result: [2,1,0,3]
assert(smallerNumbersThanCurrent([7,7,7,7]).toString() === "0,0,0,0");  // result: [0,0,0,0]