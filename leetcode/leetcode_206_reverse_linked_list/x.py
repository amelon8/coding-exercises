from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def print_node(l):
    if l is None:
        print(None)
        return
    print(f"val:{l.val}, next:{l.next}")

def print_list(l):
    if l is None:
        print(None)
        return
    n = l
    while n.next:
        print_node(n)
        n = n.next
    print_node(n)

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None: return head
        current = head
        last = None
        while last != head:
            temp = current.val
            while current.next not in [None, last]:
                current.val = current.next.val
                current = current.next
            current.val = temp
            last = current
            current = head
        return head

def main():
    n = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
    # n = ListNode(1, ListNode(2))
    # n = None
    print_list(n)
    print()
    print_list(Solution().reverseList(n))

if __name__ == '__main__':
    main()
