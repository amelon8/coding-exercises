function nextChar(c, shift) {
  // a = 97, z = 122
  // A = 65, Z = 90
  shift %= 26;
  let nextCharCode = c.charCodeAt(0);
  if (nextCharCode >= 97 && nextCharCode <= 122) {
    nextCharCode += shift;
    if (nextCharCode > 122) {
      nextCharCode = (nextCharCode % 122) + 97 - 1;   // lowercase
    }
  } else if (nextCharCode >= 65 && nextCharCode <= 90) {
    nextCharCode += shift;
    if (nextCharCode > 90) {
      nextCharCode = (nextCharCode % 90) + 65 - 1;    // uppercase
    }
  }
  return String.fromCharCode(nextCharCode);
}

/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(S, shifts) {
  let newS = S.split('');
  for (let i=0; i < shifts.length; i++) {
    for (let j=0; j <= i; j++) {
      let c = nextChar(newS[j], shifts[i]);
      newS[j] = c;
    }
    console.log("i:", i, "newS:", newS.join(''));
  }
  console.log("Final newS:", newS.join(''));
  return newS.join('');
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

assert(shiftingLetters("abc", [3,5,9]) === "rpl");
assert(shiftingLetters("bad", [10,20,30]) === "jyh");
