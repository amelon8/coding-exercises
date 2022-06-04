# https://leetcode.com/problems/isomorphic-strings/
# 205. Isomorphic Strings
from typing import List


def isascii(s):
    """Check if the characters in string s are in ASCII, U+0-U+7F."""
    return len(s) == len(s.encode())


class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        if not s.isalpha() or not t.isalpha():
            return False
        s_map = {}
        s_new = ""
        i = 0
        while i < len(s):
            v = s[i]
            if v in s_map:
                s_new += s_map[v]
            else:
                if t[i] in s_map.values():
                    # No two characters may map to the same character.
                    return False
                s_map[v] = t[i]
                s_new += t[i]
            # print(f"s_new: {s_new}, s: {s}, t: {t}, s_map: {s_map}")
            i += 1
        return s_new == t


def main():
    assert Solution().isIsomorphic("egg", "add") is True
    assert Solution().isIsomorphic("foo", "bar") is False
    assert Solution().isIsomorphic("paper", "title") is True
    assert Solution().isIsomorphic("badc", "baba") is False


if __name__ == "__main__":
    main()
