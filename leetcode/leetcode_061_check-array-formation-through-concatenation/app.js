function removeElements(a, b) {
  // Remove elements in array b from array a.
  let idx = -1;
  for (let i=0; i < a.length; i++) {
    // console.log("i:", i, "a[i]:", a[i], "b[0]:", b[0]);
    if (a[i] === b[0]) {
      idx = i;
      break;
    }
  }
  // console.log("a:", a, "b:", b, "idx:", idx);
  if (idx >= 0) {   // Found start of elements
    for (let i=1; i < b.length; i++) {
      if (b[i] != a[idx+i]) {
        return false;
      }
    }
    // All elements matched. So we remove them all.
    a.splice(idx, b.length)
    // console.log("new a:", a);
    return true;
  }
  return false;
}

/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
  for (let i=0; i < pieces.length; i++) {
    if (removeElements(arr, pieces[i]) != true) {
      // console.log("canFormArray: false");
      return false;
    }
  }
  // console.log("canFormArray: true");
  return true;
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

assert(canFormArray([85], [[85]]) === true);
assert(canFormArray([15,88], [[88],[15]]) === true);
assert(canFormArray([49,18,16], [[16,18,49]]) === false);
assert(canFormArray([91,4,64,78], [[78],[4,64],[91]]) === true);
assert(canFormArray([1,3,5,7], [[2,4,6,8]]) === false);
