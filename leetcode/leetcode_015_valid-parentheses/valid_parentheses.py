#!/usr/bin/env python3

MATCH = {
  "(": ")",
  "[": "]",
  "{": "}"
  }

class Solution:
    def findMatch(self, a):
        for i in range(len(a)):
            if i+1 >= len(a):
              return False   # index out of range
            print("i:%d, a[i]:%s, a[i+1]:%s" % (i, a[i], a[i+1]))
            if a[i] in MATCH and a[i+1] == MATCH[a[i]]:
                a.pop(i+1)
                a.pop(i)
                return True
        return False

    def isValid(self, s: str) -> bool:
        chars = list(s)   # split string into characters
        while len(chars) > 0:
            if not self.findMatch(chars):
              print("%s: is no match!" % s)
              return False
        print("%s: is match!" % s)
        return True

def main():
    s = Solution()
    assert(s.isValid("()") == True)
    assert(s.isValid("()[]{}") == True)
    assert(s.isValid("(]") == False)
    assert(s.isValid("([)]") == False)
    assert(s.isValid("{[]}") == True)

if __name__ == '__main__':
    main()
