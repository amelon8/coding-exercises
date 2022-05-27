/**
 * @param {number[]} numList
 * @return {number[]}
 */
var bubbleSort = function(numList) {
  // Followed pseudo code at https://en.wikipedia.org/wiki/Bubble_sort.
  while (true) {
    let swapped = false;
    for (let i=0; i < numList.length; i++) {
      let temp = numList[i];
      if (numList[i] > numList[i+1]) {
        numList[i] = numList[i+1];
        numList[i+1] = temp;
        swapped = true;
      }
    }
    if (swapped === false) {
      return numList;
    }
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

console.log(bubbleSort([3, 20, 10, 5, 99, 2]));
console.log(bubbleSort([99, 88, 77, 66, 55, 44, 33, 22, 11]));
