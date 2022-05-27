function isUpperCase(c) {
  return (c === c.toUpperCase()) ? true : false;
}

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  let firstLetterIsLowerCase = !isUpperCase(word[0]);
  let hasUpperCase = false;
  let hasLowerCase = false;

  if (word.length < 1)
    return true;

  for (let i=1; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase())
      hasUpperCase = true;
    else
      hasLowerCase = true;
    if (hasUpperCase && hasLowerCase)
      return false
  }
  if (firstLetterIsLowerCase && hasUpperCase)
    return false;
  return true;
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

assert(detectCapitalUse("USA") === true);
assert(detectCapitalUse("FlaG") === false);
