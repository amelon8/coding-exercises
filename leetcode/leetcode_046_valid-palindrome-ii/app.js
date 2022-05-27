/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let i1 = 0;
  let i2 = s.length - 1;

  while (true) {
    if (i1 >= i2) {
      return true;
    }
    if (s[i1] === s[i2]) {
      i1++;
      i2--;
    } else {
      break;
    }
  }

  // We are here because the string is not a valid palindrome.
  // Now we have a chance to delete a character to make it right.
  // So try both paths. First, try deleting the character on the left
  // of the string. If that fails then try deleting the character on
  // the right of the string.

  let oi1 = i1;
  let oi2 = i2;

  i1++;
  while (true) {
    if (i1 >= i2) {
      return true;
    }
    if (s[i1] === s[i2]) {
      i1++;
      i2--;
    } else {
      break;
    }
  }

  i1 = oi1;
  i2 = oi2;

  i2--;
  while (true) {
    if (i1 >= i2) {
      return true;
    }
    if (s[i1] === s[i2]) {
      i1++;
      i2--;
    } else {
      break;
    }
  }

  return false;
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

assert(validPalindrome("abc") === false);
assert(validPalindrome("aba") === true);
assert(validPalindrome("abca") === true);  // Delete character 'c'
assert(validPalindrome("abbbca") === true);
assert(validPalindrome("eeccccbebaeeabebccceea") === false);
assert(validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga") === true);
