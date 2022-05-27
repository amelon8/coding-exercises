/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
  let forward = 0;
  let reverse = 0;

  for (let i=start; i != destination; ) {
    forward += distance[i];
    // console.log("i:", i, "forward:", forward);
    if (i === distance.length - 1)
      i = 0;
    else
      i++;
  }

  for (let i=start; i != destination; ) {
    if (i === 0)
      i = distance.length - 1;
    else
      i--;
    reverse += distance[i];
    // console.log("i:", i, "reverse:", reverse);
  }

  // console.log("forward:", forward);
  // console.log("reverse:", reverse);
  // console.log("---------------------")

  if (forward < reverse)
    return forward;
  else
    return reverse;
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

// assert(distanceBetweenBusStops([1,2,3,4], 0, 1) === 1);
// assert(distanceBetweenBusStops([1,2,3,4], 0, 2) === 3);
// assert(distanceBetweenBusStops([1,2,3,4], 0, 3) === 4);
assert(distanceBetweenBusStops([7,10,1,12,11,14,5,0], 7, 2) === 17);
