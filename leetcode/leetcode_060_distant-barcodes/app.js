/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
  let numCounters = {};
  let mostCommon = undefined;
  let mostCommonCounter = 0;

  if (barcodes.length == 1)
    return barcodes;

  barcodes.sort((a, b) => a - b);

  for (let i=0; i < barcodes.length; i++) {
    let barcode = barcodes[i];
    if (barcode in numCounters)
      numCounters[barcode]++;
    else
      numCounters[barcode] = 1;
    if (numCounters[barcode] > mostCommonCounter) {
      mostCommonCounter = numCounters[barcode];
      mostCommon = barcode;
    }
  }
  console.log("numCounters:", numCounters, "mostCommon:", mostCommon, "mostCommonCounter:", mostCommonCounter);

  let subset = [];
  for (let i=0; i < barcodes.length; i++) {
    let barcode = barcodes[i];
    if (barcode != mostCommon) {
      subset.push(barcode);
    }
  }
  console.log("subset:", subset);

  let buckets = []
  let subsetLength = subset.length;
  console.log("subsetLength:", subsetLength);

  for (let i=0; i <= subsetLength; i++) {
    let bucketIdx = i % mostCommonCounter;
    if (bucketIdx + 1 > buckets.length) {
      buckets[bucketIdx] = [mostCommon];
    }
    if (i < subsetLength)
      buckets[bucketIdx].push(subset[i]);
    console.log("i:", i, "bucketIdx:", bucketIdx);
  }
  console.log("buckets:", buckets);

  let rearrangedBarcodes = buckets.reduce(function(a, b) {
    return a.concat(b);
  }, []);
  console.log("rearrangedBarcodes:", rearrangedBarcodes);

  return rearrangedBarcodes;
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

assert(rearrangeBarcodes([1]).toString() === "1");
assert(rearrangeBarcodes([1,1,2]).toString() === "1,2,1");
assert(rearrangeBarcodes([1,1,1,2,2,2]).toString() === "1,2,1,2,1,2");
assert(rearrangeBarcodes([1,1,1,1,2,2,3,3]).toString() === "1,2,1,2,1,3,1,3");
