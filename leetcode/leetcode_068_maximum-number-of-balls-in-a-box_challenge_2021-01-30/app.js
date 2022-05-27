/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
  // highLimit <= 10^5 (100,000), so there are at most 45 boxes
  // 99,999 ===> 9 + 9 + 9 + 9 + 9 ===> 45 (max box)
  var boxes = Array(46).fill(0);  // Ignore box 0
  var maxBalls = 0;

  for (var ball=lowLimit; ball <= highLimit; ball++) {
    var box = 0;
    var quotient = ball;
    for (;;) {
      box += quotient % 10;
      if (quotient == 0)
        break;
      quotient = Math.floor(quotient / 10);
    }
    boxes[box]++;
    // console.log("ball:", ball, "box:", box);
  }
  // console.log("boxes:", boxes);

  for (var i=1; i <= boxes.length; i++) {
    // console.log("i:", i, "boxes[i]:", boxes[i]);
    if (boxes[i] > maxBalls)
      maxBalls = boxes[i];
  }
  // console.log("maxBalls:", maxBalls);

  return maxBalls;
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

assert(countBalls(1, 10) === 2);
assert(countBalls(5, 15) === 2);
assert(countBalls(19, 28) === 2);