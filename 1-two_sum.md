# Two Sum

Problem: https://leetcode.com/problems/two-sum/

## Solution

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // for recording the numbers that have been through
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const parner = target - nums[i];
    if (parner in map) {
      return [map[parner], i];
    }
    map[nums[i]] = i;
  }
};
```
