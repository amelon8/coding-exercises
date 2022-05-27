/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
  let source = {};
  for (let i=0; i < paths.length; i++) {
    source[paths[i][0]] = paths[i][1];
  }
  for (let i=0; i < paths.length; i++) {
    let dest = paths[i][1];
    if (!(dest in source))
      return dest;  // final destination
  }
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

assert(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]) === "Sao Paulo");
assert(destCity([["B","C"],["D","B"],["C","A"]]) === "A");
assert(destCity([["A","Z"]]) === "Z");
