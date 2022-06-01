# https://leetcode.com/problems/zigzag-conversion/
# 6. Zigzag Conversion
# Note: Inefficient solution but demonstrates what the matrix look like for better understanding.

from typing import List


class Solution:
    def calc_matrix(self, s: str, numRows: int) -> object:
        columns = 0
        singleColumns = 0
        total = len(s)
        if numRows > total:
            numRows = total
        if numRows > 2:
            singleColumns = numRows - 2
        while True:
            if total - numRows >= 0:
                total -= numRows
                columns += 1
                if total < singleColumns:
                    columns += total
                    break
            if total - singleColumns >= 0:
                total -= singleColumns
                columns += singleColumns
                if total < numRows:
                    columns += 1
                    break
            if total == 0:
                break
        # print(f"rows: {numRows}, columns: {columns}")
        matrix = [[" "] * columns for i in range(numRows)]
        # self.print_matrix(matrix)
        # print()
        return matrix

    def print_matrix(self, matrix: object) -> None:
        for row in matrix:
            print(row)

    def matrix_as_str(self, matrix: object) -> str:
        s = ""
        for row in range(len(matrix)):
            for column in range(len(matrix[0])):
                if matrix[row][column] != " ":
                    s += matrix[row][column]
        return s

    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s
        matrix = self.calc_matrix(s, numRows)
        i = 0
        for column in range(len(matrix[0])):
            for row in range(len(matrix)):
                if i >= len(s):
                    break
                zzRow = column % (numRows - 1)
                # print(f"zzRow: {zzRow}, row: {row}, column: {column}")
                if zzRow == 0:
                    matrix[row][column] = s[i]
                    i += 1
                else:
                    matrix[-zzRow - 1][column] = s[i]
                    i += 1
                    break
        new_s = self.matrix_as_str(matrix)
        # self.print_matrix(matrix)
        # print(f"{new_s}\n")
        return new_s

    def convertX(self, s, numRows):
        """From solutions page - concise/optimized"""
        if numRows == 1:
            return s
        n = len(s)
        cycle = 2 * numRows - 2
        strlist = []
        for i in range(numRows):
            for j in range(i, n, cycle):
                strlist.append(s[j])
                if i != numRows - 1 and i != 0 and j + cycle - 2 * i < n:
                    strlist.append(s[j + cycle - 2 * i])
        newstr = "".join(strlist)
        # print(f"{newstr}\n")
        return newstr


def main():
    assert Solution().convert("A", 1) == "A"
    assert Solution().convert("A", 4) == "A"
    assert Solution().convert("ANS", 4) == "ANS"
    assert Solution().convert("PAYPALISHIRING", 1) == "PAYPALISHIRING"
    assert Solution().convert("PAYPALISHIRING", 3) == "PAHNAPLSIIGYIR"
    assert Solution().convert("PAYPALISHIRING", 4) == "PINALSIGYAHRPI"
    assert Solution().convert("PAYPALISHIRING", 5) == "PHASIYIRPLIGAN"
    assert Solution().convert("PAYPALISHIRING", 9) == "PAYPGANLIIRSIH"


if __name__ == "__main__":
    main()
