function isNumber(c) {
  return (c >= '0' && c <= '9');
}

function isLetter(c) {
  return (c.toLowerCase() >= 'a' && c.toLowerCase() <= 'z');
}

function _reformat(a1, a2) {
  let a3 = []
  for (let i=0; i < a1.length; i++) {
    a3.push(a1[i]);
    if (a2.length >= i) {
      a3.push(a2[i]);
    }
  }
  let s = a3.join('');
  // console.log("s:", s);
  return s;
}
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
  let numbers = [];
  let letters = []
  s.split('').forEach(function (item, i) {
    if (isNumber(item))
      numbers.push(item);
    else if (isLetter(item))
      letters.push(item);
  });
  if (numbers.length === letters.length || numbers.length === letters.length+1)
    return _reformat(numbers, letters);
  else if (letters.length === numbers.length+1)
    return _reformat(letters, numbers);
  else
    return '';
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

assert(reformat("a0b1c2") === "0a1b2c");
assert(reformat("leetcode") === "");
assert(reformat("1229857369") === "");
assert(reformat("covid2019") === "c2o0v1i9d");
assert(reformat("ab123") === "1a2b3");
