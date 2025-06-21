# https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
#
# Lesson learned:
#   When submitting the solution, be sure to comment out all debug statements. In my code,
#   I called the debug() function - even though it's a no-op, it caused a long delay
#   when the input data has 30K entries. So my solution failed due to "time limit exceeded".
from typing import List, Optional

def debug(s: str):
    if True:
        print(s)

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        pos = 0
        for i in range(len(nums)):
            if i == 0:
                continue
            # debug(f"pos:{pos}, nums[pos]:{nums[pos]}, i:{i}, nums[i]:{nums[i]}, nums:{nums}")
            if nums[i] == nums[pos]:
                continue
            else:
                pos += 1
                nums[pos] = nums[i]
        # debug(f"pos:{pos}, nums:{nums[:pos+1]}")
        return pos+1

def main():
    # Input: nums = [1,1,2]
    # Output: 2, nums = [1,2,_]
    assert Solution().removeDuplicates([1,1,2]) == 2

    # Input: nums = [0,0,1,1,1,2,2,3,3,4]
    # Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
    assert Solution().removeDuplicates([0,0,1,1,1,2,2,3,3,4]) == 5

if __name__ == "__main__":
    main()