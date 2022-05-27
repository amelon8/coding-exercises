/*
 * Merge sort properties:
 *   - Recursive.
 *   - Worst case is O(nlogn).
 *   - Average case is O(nlogn) - efficient on average, which is
 *     why it's widely implemented.
 *   - Space complexity is O(n).
 *   - Divide and conquer.
 */

function _merge(A, p, q, r) {
  let n1 = q - p + 1;
  let n2 = r - q;
  let L = Array(n1);
  let R = Array(n2);

  console.log("A before:", A);

  for (let i=0; i < n1; i++)
    L[i] = A[p+i];
  for (let j=0; j < n2; j++)
    R[j] = A[q+j+1];

  i = 0;
  j = 0;

  console.log("n1:", n1, "n2:", n2, "L:", L, "R:", R);

  console.log("p:", p, "r:", r, "q:", q);
  for (let k=p; k < r; k++) {
    console.log("   i:", i, "j:", j, "k:", k, "q:", q, "L[i]:", L[i], "R[j]:", R[j]);
    if (i <= q  && (j >= q || L[i] <= R[j])) {
      console.log("A[k] = L[i] <== ", L[i]);
      A[k] = L[i];
      i++;
    } else {
      console.log("A[k] = R[j] <== ", R[j]);
      A[k] = R[j];
      j++;
    }
    console.log("   A:", A)
  }

  console.log("A after:", A);

}

function _mergesort(a, p, r) {
  if (p < r) {
     q = Math.floor((p+r)/2);
     console.log("p:", p, "r:", r, "q:", q, "a:", a);
     _mergesort(a, p, q);
     _mergesort(a, q+1, r);
    _merge(a, p, q, r);
  } else {
    console.log("Exiting _mergesort - p:", p, "r:", r);
  }
}

/**
 * @param {number[]} numList
 * @return {number[]}
 */
var sort = function(numList) {
  // Followed pseudo code in Introduction to Algorithms by Thomas Cormen (section 2.3.1 merge sort).
  let a = Array.from(numList);  // Array copy
  console.log("unsorted list:", numList);
  _mergesort(a, 0, a.length-1);
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

assert(sort([8,2,7,1,3,5,6,4]).toString() == "1,2,3,4,5,6,7,8");
// assert(sort([2,8,7,1,3,5,6,4]).toString() == "1,2,3,4,5,6,7,8");
// assert(sort([8,7,6,5,4,3,2,1]).toString() == "1,2,3,4,5,6,7,8");
// assert(sort([1,2,3,4,5,6,7,8]).toString() == "1,2,3,4,5,6,7,8");
