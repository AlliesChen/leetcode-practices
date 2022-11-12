# Climbing Stairs

Question: https://leetcode.com/problems/climbing-stairs/

## Solution

I solve this problem in two methods with references attached in the paragraph:

- Matrics dynamic programming - $O(n)$

- Bottom-up dynamic programming - $O(n)$

P.S. [An O(log(n)) solution](https://leetcode.com/problems/climbing-stairs/discuss/1795114/Smart-log(n)-solution-based-on-golden-ratio-formula) with math, the solution also provides a [web page](https://akuli.github.io/math-tutorial/fib.html) to explain the theory.

### Matrics DP

[This article](https://medium.com/starbugs/find-nth-fibonacci-number-by-fast-doubling-6ac2857a7834) by Larry Lu on Medium have explicit explanation about using binary exponentiation on Fibonacci sequence.

And from the article mentioned above, [this answer](https://math.stackexchange.com/a/784723) on StackExchange have a prove about Fibonacci sequence with matrics.

I mistakenly had `const c11 = A[1][0] * B[0][1] + A[1][1] * B[1][1]` to `const c11 = A[1][0] * B[0][0] + A[1][1] * B[1][1]`, and it still passed. 😀 I found this mistake from trying to implement exponentiating by squaring method. The wrong outputs show when the input is 9, 17, and 35.

```javascript
"use strict"
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const A = [
        [1, 1],
        [1, 0],
    ];
    if (n === 1) {
        return A[0][0];
    }
    let expo_by_squar = calcMatrics(A, A);
    for (i = 1; i < n - 1; i++) {
        expo_by_squar = calcMatrics(expo_by_squar, A)
    }
    return expo_by_squar[0][0]
};

function calcMatrics(A, B) {
    const c00 = A[0][0] * B[0][0] + A[0][1] * B[1][0];
    const c01 = A[0][0] * B[0][1] + A[0][1] * B[1][1];
    const c10 = A[1][0] * B[0][0] + A[1][1] * B[1][0];
    const c11 = A[1][0] * B[0][1] + A[1][1] * B[1][1];
    const C = [
        [c00, c01],
        [c10, c11]
    ]
    return C
}
```

### Bottom-Up DP

This implements refer to [the solution](https://leetcode.com/problems/climbing-stairs/discuss/1792723/Python-or-In-Depth-Walkthrough-+-Explanation-or-DP-Top-Down-+-Bottom-Up):

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    //base stair = 0
    let stair = 2;
    const sum = [1, 2];
    while (stair < n) {
        sum[2] = sum[0] + sum[1];
        sum[0] = sum[1];
        sum[1] = sum[2];
        stair += 1;
    }
    return sum[2] ?? n;
};
```
