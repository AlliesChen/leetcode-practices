# Convert Sorted Array to Binary Search Tree

Question: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree

Refer to [the solution](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/2406277/python-easily-understood-faster-than-86-less-than-83-recursion/) by wingskh. As the question description mentions the BST is height-balanced, also it's a sorted list, the middle element must be the root node of `nums` - `Math.floor(nums.length / 2)`.

> A height-balanced tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null;
    }
    const mid = nums.length >> 1;
    return new TreeNode(
        nums[mid],
        sortedArrayToBST(nums.slice(0, mid)),
        sortedArrayToBST(nums.slice(mid + 1, nums.length))
    );
};
```
