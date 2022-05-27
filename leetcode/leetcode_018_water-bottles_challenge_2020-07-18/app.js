/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
  let drankBottles = 0;
  while (true) {
    let empty = Math.floor(numBottles / numExchange);
    let remainder = numBottles % numExchange;
    drankBottles += empty * numExchange;
    numBottles = empty + remainder;
    if (numBottles < numExchange) {
      drankBottles += numBottles;
      // console.log("drankBottles:" + drankBottles);
      return drankBottles;
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

assert(numWaterBottles(9, 3) === 13);
assert(numWaterBottles(15, 4) === 19);
assert(numWaterBottles(5, 5) === 6);
assert(numWaterBottles(2, 3) === 2);