# https://leetcode.com/problems/missing-number/
# 268. Missing Number
from typing import List


class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        # all_nums represents all the distinct numbers in the range [0, n].
        # After removing all numbers found in nums, the only remaining is
        # the missing number.
        all_nums = list(range(len(nums) + 1))
        for x in nums:
            all_nums.remove(x)
        return all_nums[0]


def main():
    assert Solution().missingNumber([3, 0, 1]) == 2
    assert Solution().missingNumber([0, 1]) == 2
    assert Solution().missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]) == 8


if __name__ == "__main__":
    main()
