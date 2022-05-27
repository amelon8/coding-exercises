/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy_idx = -1;
    let sell_idx = -1;
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i+1; j < prices.length; j++) {
            if (prices[i] < prices[j]) {
                let value = prices[j] - prices[i];
                if (value > profit) {
                    profit = value;
                    buy_idx = i;
                    sell_idx = j
                }
            }
        }
    }
    console.log("profit:" + profit);
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

assert(maxProfit([7,1,5,3,6,4]) === 5);
assert(maxProfit([7,6,4,3,1]) === 0);
assert(maxProfit([7,6,1,8,4,9,3,1]) === 8);
