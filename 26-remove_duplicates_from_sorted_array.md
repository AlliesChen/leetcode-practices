# Remove Duplicates from Sorted Array

Question Link: [Remove Duplicates from Sorted Array - LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)

The first thought came to my mind was using `array.splice` to mutate the array:

- With a `Map` to be a reference for whether the item shows more than once.
- While the number `i` is still a valid index to the array,
- to check if there is an new item, add it to the map, and toward to the next index number;
- or splice the duplicated item and keep the same index number for next round.

In this case I actually gets an array that doesn't contain any duplicate, though the performance isn't well.

```javascript
"use strict"
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const ref = new Map()
    let i = 0;
    while (Object.hasOwn(nums, i)) {
        if (!ref.has(nums[i])) {
            ref.set(nums[i], true);
            i += 1;
        } else {
            nums.splice(i, 1);
        }
    }
    return nums.length
};
```

Because not all programming languages makes arrays work in dynamical spaces, the question only checks a quantity of non-duplicated items from the beginning of the array as its answer. So, with two pointers method:

- If the array contains zero or one item, just return the length of the array.
- Traverse the array with the `fast`  pointer,
- if the pointer meets an number that is different from what the `slow` pointer points to,
- move the `slow` pointer's index one step forward, and modify the value as same as what the `fast` pointer points to.
- Because the `slow` pointer start at 0, add 1 to its value as the final length of the non-duplicated array.

```javascript
"use strict"
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length < 2) { return nums.length }
    let slow = 0;
    for (let fast = 1; fast < nums.length; fast += 1) {
        if (nums[slow] !== nums[fast]) {
            slow += 1;
            nums[slow] = nums[fast];
        }
    }
    return slow + 1;
};
```

