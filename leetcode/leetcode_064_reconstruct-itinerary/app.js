/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {

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

assert(findItinerary(
    [["MUC", "LHR"],
     ["JFK", "MUC"],
     ["SFO", "SJC"],
     ["LHR", "SFO"]]
  ) === "JFK,MUC,LHR,SFO,SJC");
assert(findItinerary(
    [["JFK","SFO"],
     ["JFK","ATL"],
     ["SFO","ATL"],
     ["ATL","JFK"],
     ["ATL","SFO"]]
  ) === "JFK,ATL,JFK,SFO,ATL,SFO");
