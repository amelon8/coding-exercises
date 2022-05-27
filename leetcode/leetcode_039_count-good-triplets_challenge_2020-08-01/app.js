/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
  let countTriplets = 0;
  let countGoodTriplets = 0;

  // Brute force search for all triplets
  for (let i=0; i < arr.length; i++) {
    for (let j=i+1; j < arr.length; j++) {
      if (j >= arr.length)
        break;
      for (let k=j+1; j < arr.length; k++) {
        if (k >= arr.length)
          break;
        countTriplets++;
        let isGood = (Math.abs(arr[i] - arr[j]) <= a &&
                      Math.abs(arr[j] - arr[k]) <= b &&
                      Math.abs(arr[i] - arr[k]) <= c) ? true : false
        if (isGood)
          countGoodTriplets++;
        console.log("arr[i]:", arr[i], "arr[j]:", arr[j], "arr[k]:", arr[k], "isGood:", isGood);
      }
    }
  }
  // console.log("countTriplets:", countTriplets);
  // console.log("countGoodTriplets:", countGoodTriplets);
  return countGoodTriplets;
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

assert(countGoodTriplets([1,2,3,4,5,6], 7, 2, 3) === 10);
assert(countGoodTriplets([3,0,1,1,9,7], 7, 2, 3) === 4);
assert(countGoodTriplets([1,1,2,2,3], 0, 0, 1) === 0);
