/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
  let result = [];
  for (let i=0; i < l.length; i++) {
    let range = nums.slice(l[i], r[i]+1);
    // console.log("i:", i, "l[i]:", l[i], "r[i]:", r[i], "range:", range);
    range.sort((a, b) => a - b);
    // console.log("sorted range:", range);
    let arithmeticSequence = range[1] - range[0];
    let isSequence = true;
    for (let j=2; j < range.length; j++) {
      if (range[j] - range[j-1] != arithmeticSequence)
        isSequence = false;
    }
    // console.log("isSequence:", isSequence);
    result.push(isSequence);
  }
  // console.log("result:", result);
  return result;
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

assert(checkArithmeticSubarrays([4,6,5,9,3,7], [0,0,2], [2,3,5]).toString() === "true,false,true");
assert(checkArithmeticSubarrays(
    [-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10],
    [0,1,6,4,8,7],
    [4,4,9,7,9,10]
  ).toString() === "false,true,false,false,true,true");