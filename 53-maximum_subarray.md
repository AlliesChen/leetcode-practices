# Maximum Subarray

Problem: https://leetcode.com/problems/maximum-subarray/

## Solution

I imply two methods to solve the problem:

- Divide And Conquer Approach - time complexity: $O(N)$
- Kadane's Algorithm - time complexity: $O(N)$

### Divide And Conquer Approach

Refer to [the fantastic solutions by archit91](https://leetcode.com/problems/maximum-subarray/solutions/1595195/c-python-7-simple-solutions-w-explanation-brute-force-dp-kadane-divide-conquer/), and with [the article](https://afteracademy.com/blog/divide-and-conquer-approach-in-programming) which provides nice pictures for explaining the concept of divide and conquer approach implied in Binary Search and Merge Sort.

```javascript
"use strict"
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const leftPart = [...nums], rightPart = [...nums];
    const length = nums.length;
    for (let i = 1; i < length; i += 1) {
        leftPart[i] += Math.max(0, leftPart[i - 1]);
        rightPart[length - 1 - i] += Math.max(0, rightPart[length - i])
    }

    function divideAndConquer(all, left, right) {

        if ( left === right ) {
            return all[left];
        }
        const mid = Math.floor((left + right) / 2);
        // compare the value and find the max among the left, the right and the middle
        return Math.max(divideAndConquer(all, left, mid), divideAndConquer(all, mid + 1, right), leftPart[mid] + rightPart[mid + 1]);
    }
    return divideAndConquer(nums, 0, nums.length - 1);
};
```

### Kadane's Algorithm

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
  var maxSubArray = function (nums) {
  let current;
  let accum = 0;
  let max;
  for (let i = 0; i < nums.length; i++) {
   if (i === 0) {
     accum = nums[i];
     max = accum;
     continue;
   }
   //from i = 1
   current = nums[i];
   if (accum + current < current) {
     start = current;
     accum = start;
   } else {
     accum += current;
   }
   max = max > accum ? max : accum;
  }
  return max;
  };
```

It can be done by `Array.reduce()` method, though the performance isn't good:

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let max = nums[0];
    if (nums.length > 1) {
        nums.reduce((accum, current) => {
        if(accum+current < current) {
            accum = current;
        } else {
            accum += current;
        }
        max = (max > accum) ? max : accum;
        return accum
        });
    }    
    return max
};
```
