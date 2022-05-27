/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  let nextNode = head;
  let value = head.val;
  while (nextNode.next !== null) {
    nextNode = nextNode.next;
    value <<= 1;
    value |= nextNode.val;
    console.log("nextNode.val:", nextNode.val, "value:", value);
  }
  console.log("value:", value);
  return value;
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

let head;

head = new ListNode(1,
            new ListNode(0,
              new ListNode(1)));   // Binary: [1, 0, 1]
assert(getDecimalValue(head) === 5);

head = new ListNode(0);            // Binary: [0]
assert(getDecimalValue(head) === 0);

head = new ListNode(1,
            new ListNode(0,
              new ListNode(0,
                new ListNode(1,
                  new ListNode(0,
                    new ListNode(0,
                      new ListNode(1,
                        new ListNode(1,
                          new ListNode(1,
                            new ListNode(0,
                              new ListNode(0,
                                new ListNode(0,
                                  new ListNode(0,
                                    new ListNode(0,
                                      new ListNode(0)))))))))))))));
                                   // Binary: [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
assert(getDecimalValue(head) === 18880);
