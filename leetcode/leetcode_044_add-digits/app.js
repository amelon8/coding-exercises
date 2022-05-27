/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let d1 = 0;
  if (num < 10)
    return num;
  while (num > 9) {
    let d2 = num % 10;
    if (d1 + d2 > 9)
      d1 = (d1 + d2) % 10 + 1;
    else
      d1 += d2;
    num = Math.floor(num / 10);
    // console.log("d1:", d1, "d2:", d2, "num:", num);
  }
  let result = d1 + num;
  if (result > 9)
    result = result % 10 + 1;
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

assert(addDigits(38) === 2);
assert(addDigits(354) === 3);
assert(addDigits(399) === 3);
assert(addDigits(428) === 5);
