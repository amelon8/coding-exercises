function isNumber(c) {
  return (c >= '0' && c <= '9');
}

function isLetter(c) {
  return (c.toLowerCase() >= 'a' && c.toLowerCase() <= 'z');
}

function toAphaNumeric(c) {
  if (isNumber(c))
    return c;
  else if (isLetter(c))
    return c.toLowerCase();
  else
    return "";
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s === "")
    return true;
  let s1 = "";
  let s2 = "";
  for (let i=0; i < s.length; i++) {
    let c = toAphaNumeric(s[i]);
    if (c != "") {
      s1 = s1 + c;
      s2 = c + s2;
    }
  }
  // console.log("s1:", s1, "s2:", s2);
  return (s1 === s2);
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

assert(isPalindrome("") === true);
assert(isPalindrome("A man, a plan, a canal: Panama") === true);
assert(isPalindrome("race a car") === false);
assert(isPalindrome("aaa{aa}a") === true);
assert(isPalindrome("Marge, let's \"[went].\" I await {news} telegram.") === true);