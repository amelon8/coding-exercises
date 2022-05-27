/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let lastChar = null;
  let count = 0;
  let i = 0;

  // Note: chars needs to be updated to reflect the compressed result.
  //       The LeetCode validation test will check the values in chars.

  for ( ; i < chars.length; ) {
    if (lastChar === null) { // start at the beginning
      lastChar = chars[i];
      count = 1;
      i++;
    } else if (chars[i] === lastChar) {
      count++;
      chars.splice(i, 1);  // remove character from array
      // console.log("i:", i, ", chars[i]:", chars[i], ", chars:", chars);
    } else {
      if (count > 1) {
        let digits = count.toString().split('');
        for (let j=0; j < digits.length; j++)
          chars.splice(i++, 0, digits[j]);
      }
      lastChar = chars[i];
      i++;
      count = 1;
      // console.log("i:", i, ", chars[i]:", chars[i], ", chars:", chars);
    }
  }
  if (count > 1) {
    let digits = count.toString().split('');
    for (let j=0; j < digits.length; j++)
      chars.splice(i++, 0, digits[j]);
  }
  // console.log("chars:", chars)

  return chars.length;
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

let s = ["a","a","b","b","c","c","c"];
assert(compress(s) === 6);
console.log(s);

s = ["a"];
assert(compress(["a"]) === 1);
console.log(s);

s = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];
assert(compress(s) === 4);
console.log(s);
