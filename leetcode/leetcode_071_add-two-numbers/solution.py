# https://leetcode.com/problems/add-two-numbers/
# 2. Add Two Numbers
from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, nextNode=None):
        self.val = val
        self.next = nextNode


class Solution:
    def addTwoNumbers(
        self, l1: Optional[ListNode], l2: Optional[ListNode]
    ) -> Optional[ListNode]:
        remainder = 0
        l3 = None
        while l1 is not None or l2 is not None:
            if l3 is None:
                l3 = ListNode(0)
                newList = l3
            else:
                newList.next = ListNode(0)
                newList = newList.next

            n1 = 0 if l1 is None else l1.val
            n2 = 0 if l2 is None else l2.val
            val = n1 + n2 + remainder
            remainder = int(val / 10)
            val = val % 10
            # print(f"l1.val: {n1}, l2.val: {n2}, remainder: {remainder}, val: {val}")
            newList.val = val
            # printList(l3)

            if l1:
                l1 = None if l1.next is None else l1.next
            if l2:
                l2 = None if l2.next is None else l2.next
        if remainder:
            newList.next = ListNode(remainder)
        # printList(l3)
        return l3


def getListStr(l: ListNode) -> str:
    s = str(l.val)
    while l.next:
        l = l.next
        s = str(l.val) + s
    return s


def printList(l: ListNode) -> str:
    print(f"printList: {getListStr(l)}")


def main():
    # l1 = ListNode(2, ListNode(4, ListNode(3)))
    # l2 = ListNode(5, ListNode(6, ListNode(4)))
    # assert getListStr(Solution().addTwoNumbers(l1, l2)) == "807"

    # l1 = ListNode(0)
    # l2 = ListNode(0)
    # assert getListStr(Solution().addTwoNumbers(l1, l2)) == "0"

    l1 = ListNode(
        9, ListNode(9, ListNode(9, ListNode(9, ListNode(9, ListNode(9, ListNode(9))))))
    )
    l2 = ListNode(9, ListNode(9, ListNode(9, ListNode(9))))

    print(getListStr(Solution().addTwoNumbers(l1, l2)))
    assert getListStr(Solution().addTwoNumbers(l1, l2)) == "10009998"


if __name__ == "__main__":
    main()
