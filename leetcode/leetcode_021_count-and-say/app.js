/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) {
    return "1";
  } else {
    let str = countAndSay(n-1);
    let newStr = "";
    let lastDigit = "0";
    let digitCount = 0;

    for (let i=0; i < str.length; i++) {
      // console.log("str:" + str + " lastDigit:" + lastDigit + " digitCount:" + digitCount);
      if (str[i] !== lastDigit) {
        if (lastDigit !== "0") {
          newStr += digitCount.toString() + lastDigit;
        }
        lastDigit = str[i];
        digitCount = 1;
      } else {
        digitCount++;
      }
    }
    newStr += digitCount.toString() + lastDigit;
    // console.log("newStr:" + newStr);
    return newStr;
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

assert(countAndSay(1) === "1");
assert(countAndSay(2) === "11");
assert(countAndSay(3) === "21");
assert(countAndSay(4) === "1211");
assert(countAndSay(5) === "111221");
assert(countAndSay(6) === "312211");
assert(countAndSay(7) === "13112221");
assert(countAndSay(8) === "1113213211");
assert(countAndSay(9) === "31131211131221");
assert(countAndSay(10) === "13211311123113112211");