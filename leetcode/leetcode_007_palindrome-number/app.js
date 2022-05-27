/**
 * @param {number} x
 * @return {boolean}
 */
function num_to_arr(n) {
  let a = [];
  while (n > 0) {
    a.unshift(n % 10);
    n = Math.floor(n / 10);
  }
  return a;
}

var isPalindrome = function(x) {
  if (x < 0 || x % 10 === 0)
    return false;
  let arr = num_to_arr(x);

  let head = 0;
  let tail = arr.length - 1;
  while (head < tail) {
    if (arr[head] !== arr[tail])
      return false;
    head++;
    tail--;
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

assert(isPalindrome(121) === true);
assert(isPalindrome(-121) === false);
assert(isPalindrome(10) === false);
