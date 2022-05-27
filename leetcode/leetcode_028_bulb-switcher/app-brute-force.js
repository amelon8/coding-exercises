// This solution fails LeetCode test with Runtime Error.
// Basically it runs out of memory due to O(n^2) complexity.

/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
  // 1st round
  let bulbs = Array.from({length:n}, (v, i) => 1);
  // console.log("Round 1 :", bulbs);

  for (let i=2; i <= n; i++) {
    for (let j=i; j <= n; j += i) {
      bulbs[j-1] ^= 1;
    }
    // console.log("Round", i, ":", bulbs);
  }
  let bulbsOn = 0;
  for (let i=0; i < n; i++)
    if(bulbs[i] === 1)
      bulbsOn++;
  console.log("n:", n, "bulbsOn:", bulbsOn);
  return bulbsOn;
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

assert(bulbSwitch(1) === 1);
assert(bulbSwitch(2) === 1);
assert(bulbSwitch(3) === 1);
assert(bulbSwitch(4) === 2);
assert(bulbSwitch(5) === 2);
assert(bulbSwitch(6) === 2);
assert(bulbSwitch(7) === 2);
assert(bulbSwitch(8) === 2);
assert(bulbSwitch(9) === 3);
assert(bulbSwitch(10) === 3);
assert(bulbSwitch(11) === 3);
assert(bulbSwitch(12) === 3);
assert(bulbSwitch(13) === 3);
assert(bulbSwitch(14) === 3);
assert(bulbSwitch(15) === 3);
assert(bulbSwitch(16) === 4);
assert(bulbSwitch(24) === 4);
assert(bulbSwitch(25) === 5);