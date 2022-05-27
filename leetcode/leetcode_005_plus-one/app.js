/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  digits[digits.length - 1]++;
  console.log(digits);
  var carry_bit = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    val = digits[i] + carry_bit;
    digits[i] = val % 10;
    carry_bit = Math.floor(val / 10);
    console.log("i:" + i + " val:" + val
                + " digits[i]:" + digits[i]
                + " carry_bit:" + carry_bit);
  }
  if (carry_bit)
    digits.unshift(1);
  return digits;
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

assert(plusOne([1,2,3])[0] == 1);
assert(plusOne([1,2,3])[1] == 2);
assert(plusOne([1,2,3])[2] == 4);

assert(plusOne([4,3,2,1])[0] == 4);
assert(plusOne([4,3,2,1])[1] == 3);
assert(plusOne([4,3,2,1])[2] == 2);
assert(plusOne([4,3,2,1])[3] == 2);

assert(plusOne([9,9,9])[0] == 1);
assert(plusOne([9,9,9])[1] == 0);
assert(plusOne([9,9,9])[2] == 0);
assert(plusOne([9,9,9])[3] == 0);
