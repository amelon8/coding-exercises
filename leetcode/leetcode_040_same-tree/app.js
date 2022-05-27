/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  // console.log("p.val:", p.val, "q.val:", q.val);
  // console.log(p, q);

  if (!p && !q) {
    return true;
  }

  if (!p || !q || p.val !== q.val)
    return false;

  return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
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

let tree1, tree2;

assert(isSameTree(null, null) === true);
assert(isSameTree(null, new TreeNode(0)) === false);
assert(isSameTree(new TreeNode(), new TreeNode()) === true);

tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
assert(isSameTree(tree1, tree2) === true);

tree1 = new TreeNode(1, new TreeNode(2), new TreeNode());
tree2 = new TreeNode(1, new TreeNode(),  new TreeNode(2));
assert(isSameTree(tree1, tree2) === false);

tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(1));
tree2 = new TreeNode(1, new TreeNode(1),  new TreeNode(2));
assert(isSameTree(tree1, tree2) === false);
