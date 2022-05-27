/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  let lo = prices[0];
  let hi = 0;

  for (let i=1; i < prices.length; i++) {
    if (lo > prices[i] && hi == 0) {
      lo = prices[i];
    } else if (hi < prices[i]) {
      hi = prices[i];
    } else {
      profit += hi - lo;
      lo = prices[i];
      hi = 0;
    }
    // console.log("lo:", lo, "hi:", hi, "profit:", profit);
  }
  if (hi > lo)
    profit += hi - lo;
    // console.log("lo:", lo, "hi:", hi, "profit:", profit);
  return profit;
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

assert(maxProfit([7,1,5,3,6,4]) === 7);
assert(maxProfit([1,2,3,4,5]) === 4);
assert(maxProfit([7,6,4,3,1]) === 0);
assert(maxProfit([2,4,1]) === 2);
assert(maxProfit([2,4,3]) === 2);
