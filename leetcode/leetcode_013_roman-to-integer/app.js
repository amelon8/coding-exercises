/**
 * @param {string} s
 * @return {number}
 */
const SYMBOLS = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var romanToInt = function(s) {
    let total = 0;
    for (let i=0; i<s.length; i++) {
        let val = s[i];
        let lookAhead = null;
        if (i+1 < s.length)
            lookAhead = s[i+1];
        //console.log("val:" + val + ", lookAhead:" + lookAhead + ", total:" + total);
        if (val === 'I' && (lookAhead === 'V' || lookAhead === 'X')) {
            total += SYMBOLS[lookAhead] - 1;
            i++;
        } else if (val === 'X' && (lookAhead === 'L' || lookAhead === 'C')) {
            total += SYMBOLS[lookAhead] - 10;
            i++;
        } else if (val === 'C' && (lookAhead === 'D' || lookAhead === 'M')) {
            total += SYMBOLS[lookAhead] - 100;
            i++;
        } else {
            total += SYMBOLS[val];
        }
    }
    console.log(total);
    return total;
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

assert(romanToInt("III") === 3);
assert(romanToInt("IV") === 4);
assert(romanToInt("IX") === 9);
assert(romanToInt("LVIII") === 58);
assert(romanToInt("MCMXCIV") === 1994);
