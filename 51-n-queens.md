# 51. N-Queens

Question: [N-Queens - LeetCode](https://leetcode.com/problems/n-queens/description/)

Mindset for solving the problem: [エイト・クイーンの JavaScript 解法 (Eight queens puzzle) #JavaScript - Qiita](https://qiita.com/ochairo/items/0f2782cf145b5004db8c)

> The solution uses [Backtracking algorithm](https://en.wikipedia.org/wiki/Backtracking)

## Solution

```python
class Queen:
    """ record the position of the queen """
    def __init__(self, row, col):
        self.row = row
        self.col = col
    @property
    def left_diagonal(self) -> int:
        """ the diagonal across the checkerboard and the queen from right to left, like / """
        return self.row - self.col
    @property
    def right_diagonal(self) -> int:
        """ the diagonal across the checkerboard and the queen from left to right, like \ """
        return self.row + self.col

def is_safe(queens, row, col) -> bool:
    newQueen = Queen(row, col)
    # check if the new queen is cannot be attacked by any of the previous queens
    for currentQueen in queens:
        if currentQueen \
            and (newQueen.row == currentQueen.row
            or newQueen.col == currentQueen.col
            or newQueen.left_diagonal == currentQueen.left_diagonal
            or newQueen.right_diagonal == currentQueen.right_diagonal):
            return False
    return True

def nQueensRecursion(solutions: List[str], prevQueens: List[str],  n: int, row: int): 
    if row == n:
        solutions.append(list(map(lambda q: ("." * q.col) + "Q" + ("." * (n - 1 - q.col)), prevQueens)))
        return
    
    for col in range(n):
        if is_safe(prevQueens, row, col):
            prevQueens[row] = Queen(row, col)
            nQueensRecursion(solutions, prevQueens, n, row + 1)
            prevQueens[row] = None
    return

class Solution:   
    def solveNQueens(self, n: int) -> List[List[str]]:
        """ the main function that solve the problem """
        # for n = 4, the solution should be like [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
        solutions = []
        queens = [None] * n

        nQueensRecursion(solutions, queens, n, 0)
        return solutions

```



