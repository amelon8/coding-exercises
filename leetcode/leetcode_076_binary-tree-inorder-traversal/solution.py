# https://leetcode.com/problems/binary-tree-inorder-traversal/
# 94. Binary Tree Inorder Traversal
from typing import List, Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if root is None:
            return []
        left = self.inorderTraversal(root.left)
        right = self.inorderTraversal(root.right)
        # print(f"val: {root.val}, left: {left}, right: {right}")
        r = [root.val]
        if left:
            r = left + r
        if right:
            r = r + right
        # print(f"r: {r}")
        return r


def main():
    # Input: root = []
    # Output: []
    assert Solution().inorderTraversal(None) == []

    # Input: root = [1]
    # Output: [1]
    assert Solution().inorderTraversal(TreeNode(1)) == [1]

    # Input: root = [1,null,2,3]
    # Output: [1,3,2]
    assert Solution().inorderTraversal(TreeNode(1, None, TreeNode(2, TreeNode(3)))) == [
        1,
        3,
        2,
    ]

    # Input: root = [1, 2, 3, 4, 5]
    # Output: [1]
    assert Solution().inorderTraversal(
        TreeNode(1, TreeNode(2, TreeNode(4), TreeNode(5)), TreeNode(3))
    ) == [4, 2, 5, 1, 3]


if __name__ == "__main__":
    main()
