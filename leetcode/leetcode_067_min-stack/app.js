/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack[this.stack.length] = x;
  console.log("push:", this.stack);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.splice(this.stack.length-1, 1);
  console.log("pop:", this.stack);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  var min = this.stack[0];
  for (var i=1; i < this.stack.length; i++)
    if (min > this.stack[i])
      min = this.stack[i];
  return min;
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

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
assert(minStack.getMin() === -3);
minStack.pop();
assert(minStack.top() === 0);
assert(minStack.getMin() === -2);
