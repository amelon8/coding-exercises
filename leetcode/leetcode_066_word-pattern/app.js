/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  var pattern_dict = {};
  var word_dict = {};
  var words = s.split(" ");

  if (words.length !== pattern.length) {
    return false;
  }
  for (var i=0; i < pattern.length; i++) {
    var key = pattern[i];
    // console.log("key:", key);
    if (key in pattern_dict) {
      // console.log("pattern_dict[key]:", pattern_dict[key], "words[i]:", words[i]);
      if (pattern_dict[key] != words[i])
        return false;
    } else {
      if (words[i] in word_dict) {
        return false;
      }
      pattern_dict[key] = words[i];
      word_dict[words[i]] = key;
      // console.log("pattern_dict:", pattern_dict);
    }
  }
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

assert(wordPattern("abba", "dog cat cat dog") === true);
assert(wordPattern("abba", "dog cat cat fish") === false);
assert(wordPattern("aaaa", "dog cat cat dog") === false);
assert(wordPattern("abba", "dog dog dog dog") === false);
assert(wordPattern("aaa", "aa aa aa aa") === false);
