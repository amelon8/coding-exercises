# https://leetcode.com/problems/binary-tree-preorder-traversal/
# 144. Binary Tree Preorder Traversal
from typing import List, Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if root is None:
            return []
        left = self.preorderTraversal(root.left)
        right = self.preorderTraversal(root.right)
        # print(f"val: {root.val}, left: {left}, right: {right}")
        r = [root.val]
        if left:
            r = r + left
        if right:
            r = r + right
        # print(f"r: {r}")
        return r


def main():
    # Input: root = []
    # Output: []
    assert Solution().preorderTraversal(None) == []

    # Input: root = [1]
    # Output: [1]
    assert Solution().preorderTraversal(TreeNode(1)) == [1]

    # Input: root = [1,null,2,3]
    # Output: [1,2,3]
    assert Solution().preorderTraversal(
        TreeNode(1, None, TreeNode(2, TreeNode(3)))
    ) == [1, 2, 3]

    # Input: root = [1, 2, 3, 4, 5]
    # Output: [1]
    assert Solution().preorderTraversal(
        TreeNode(1, TreeNode(2, TreeNode(4), TreeNode(5)), TreeNode(3))
    ) == [1, 2, 4, 5, 3]


if __name__ == "__main__":
    main()
