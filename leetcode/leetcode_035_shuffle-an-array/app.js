/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums.slice(0, nums.length);  // array copy
    // console.log("this.nums:", this.nums);
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  let a = this.nums.slice(0, this.nums.length);
  let shuffled = [];
  for ( ; a.length > 0; ) {
    let i = Math.floor(Math.random() * a.length);
    shuffled.push(a[i]);
    a.splice(i, 1);
    // console.log("i:", i, "a:", a, "shuffled:", shuffled);
  }
  return shuffled;
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

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

let nums = [1, 2, 99, 40, 3];
let obj = new Solution(nums);

let params_1 = obj.reset()
console.log("params_1:", params_1);

let params_2 = obj.shuffle()
console.log("params_2:", params_2);

let params_3 = obj.reset()
console.log("params_3:", params_3);
