function sumArray(arr) {
  let sum = 0;
  for (let i=0; i < arr.length; i++)
    sum += arr[i];
  return sum;
}

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
  let total = 0;
  let totalSubArrays = 0;
  console.log("arr:", arr);
  for (let oddLength=1; oddLength <= arr.length; oddLength+=2) {
    // console.log("oddLength:", oddLength);
    for (let i=0; (i+oddLength) <= arr.length; i++) {
      let subArray = arr.slice(i, i+oddLength);
      let sum = sumArray(subArray);
      total += sum;
      totalSubArrays++;
      console.log(totalSubArrays, "subArray:", subArray, "sum:", sum, "("+total+")");
    }
  }
  return total;
}

function assert(condition, message) {
  if (!condition) {
      message = message || "Assertion failed";
      if (typeof Error !== "undefined") {
          throw new Error(message);
      }
      throw message; // Fallback
  }
}

assert(sumOddLengthSubarrays([9]) === 9);
assert(sumOddLengthSubarrays([1,2]) === 3);
assert(sumOddLengthSubarrays([10,11,12]) === 66);
assert(sumOddLengthSubarrays([1,2,3,4]) === 25);
assert(sumOddLengthSubarrays([1,4,2,5,3]) === 58);
