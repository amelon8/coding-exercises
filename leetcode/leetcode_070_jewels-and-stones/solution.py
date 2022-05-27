# https://leetcode.com/problems/jewels-and-stones/
# 771. Jewels and Stones
from typing import List


class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        result = 0
        for x in jewels:
            for y in stones:
                if x == y:
                    result += 1
        return result


def main():
    assert Solution().numJewelsInStones("aA", "aAAbbbb") == 3
    assert Solution().numJewelsInStones("z", "ZZ") == 0


if __name__ == "__main__":
    main()
