/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let triangle = [];
  let arr = [];
  let prev_arr = [];

  for (let i = 0; i < numRows; i++) {
    arr = [];
    if (i === 0)
      arr = [1];
    else if (i === 1)
      arr = [1,1];
    else {
      for (let ii = 0; ii <= i; ii++) {
        if (ii === 0 || ii == i)
          arr.push(1);
        else {
          //console.log("last: ", prev_arr);
          //console.log("i: " + i);
          arr.push( prev_arr[ii-1] + prev_arr[ii] );
        }
      }
    }
    triangle.push(arr);
    prev_arr = arr;
  }
  return triangle;
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

//console.log(generate(1));
//console.log(generate(2));
//console.log(generate(3));
//console.log(generate(4));
//console.log(generate(5));
console.log(generate(6));