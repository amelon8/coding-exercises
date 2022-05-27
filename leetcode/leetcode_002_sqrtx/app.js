/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  for (var i = 0; ; i ++) {
    i_square = i * i;
    if (i_square > x)
      return i - 1;
    else if (i_square == x)
      return i
  }
};

console.log("Start");
vals = mySqrt(300);
console.log("Val: ", vals);
console.log("End");
