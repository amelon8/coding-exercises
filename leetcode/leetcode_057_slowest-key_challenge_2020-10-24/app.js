/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
  let duration = 0;
  let slowestDuration = 0;
  let slowestKey = "";
  for (let i=0; i < keysPressed.length; i++) {
    if (i === 0)
      duration = releaseTimes[i];
    else
      duration = releaseTimes[i] - releaseTimes[i-1];
    if (duration >= slowestDuration) {
      slowestDuration = duration;
      slowestKey = keysPressed[i];
      if (duration === slowestDuration && keysPressed[i] < slowestKey) {

      } else {
        slowestKey = keysPressed[i];
      }
    }
    // console.log("Keypressed:", keysPressed[i], "Duration:", duration);
  }
  // console.log("slowestKey:", slowestKey, "slowestDuration:", slowestDuration);
  return slowestKey;
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

assert(slowestKey([9,29,49,50], "cbcd") === "c");
assert(slowestKey([12,23,36,46,62], "spuda") === "a");
