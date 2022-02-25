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

//This implement the concept of buttom-up
//https://leetcode.com/problems/climbing-stairs/discuss/1792723/Python-or-In-Depth-Walkthrough-+-Explanation-or-DP-Top-Down-+-Bottom-Up
//A better solution is using math
//https://akuli.github.io/math-tutorial/fib.html
