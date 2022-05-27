/*
 * Quicksort properties:
 *   - Recursive.
 *   - Worst case is O(n^2).
 *   - Average case is O(nlogn) - efficient on average, which is
 *     why it's widely implemented.
 *   - Sorts in place.
 *   - Divide and conquer.
 *     - With each iteration, divide the array into a group of larger values and another group of smaller values.
 */

function partition(a, p, r) {
  // The key to the algorithm is the PARTITION procedure,
  // which rearranges the subarray A[p..r] in place.
  let x = a[r];
  let temp;

  i = p - 1;
  for (let j=p; j <= (r-1); j++) {
    console.count();
    console.log("p:", p, "r:", r, "i:", i, "j:", j, "a[j]:", a[j], "x:", x, "a[j] <= x:", a[j] <= x, "a:", a);
    if (a[j] <= x) {
      i++;
      temp = a[i];
      a[i] = a[j];
      a[j] = temp;
      console.log("   i:", i, "swapped a[i] and a[j]:", a[i], a[j]);
    }
  }
  temp = a[i+1];
  a[i+1] = a[r];
  a[r] = temp;
  console.log("Returning i+1:", i+1);
  return i+1;
}

function _quicksort(a, p, r) {
  if (p < r) {
     q = partition(a, p, r);
     console.log("p:", p, "r:", r, "q:", q, "a:", a);
     _quicksort(a, p, q-1);
     _quicksort(a, q+1, r);
  }
}

/**
 * @param {number[]} numList
 * @return {number[]}
 */
var quickSort = function(numList) {
  // Followed pseudo code in Introduction to Algorithms by Thomas Cormen (ch 7, Quicksort).
  let a = Array.from(numList);  // Array copy
  console.log("unsorted list:", numList);
  _quicksort(a, 0, a.length-1);
  console.log("sorted list  :", a);
  return a;
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

assert(quickSort([2,8,7,1,3,5,6,4]).toString() == "1,2,3,4,5,6,7,8");  // count: 20
// assert(quickSort([8,7,6,5,4,3,2,1]).toString() == "1,2,3,4,5,6,7,8");  // count: 30
// assert(quickSort([1,2,3,4,5,6,7,8]).toString() == "1,2,3,4,5,6,7,8");  // count: 31
// assert(quickSort([1,3,5,4,2]).toString() == "1,2,3,4,5");  // count: 7
// assert(quickSort([2,5,3,4,1]).toString() == "1,2,3,4,5");  // count: 7