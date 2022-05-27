# https://leetcode.com/problems/next-greater-element-i/
# 496. Next Greater Element I
from typing import List


class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        result: List[int] = []
        for idx, x in enumerate(nums1):
            found_x = False
            for _, y in enumerate(nums2):
                if x == y:
                    found_x = True
                if x < y and found_x is True:
                    result.append(y)
                    break

            if len(result) < idx + 1:
                result.append(-1)
        return result


def main():
    assert Solution().nextGreaterElement([4, 1, 2], [1, 3, 4, 2]) == [-1, 3, -1]
    assert Solution().nextGreaterElement([2, 4], [1, 2, 3, 4]) == [3, -1]


if __name__ == "__main__":
    main()
