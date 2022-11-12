# Validate Binary Search Tree

Question: https://leetcode.com/problems/validate-binary-search-tree

Refer to [the solution](https://leetcode.com/problems/validate-binary-search-tree/solutions/2409071/python-one-liner-96-6-with-detailed-explantion-recursion-simple/)

```javascript
"use strict"
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    function checkNode(node, low, high) {
        if (!node) { return true; }
        if (node.val <= low || node.val >= high) {
            return false;
        }
        return checkNode(node.left, low, node.val) && checkNode(node.right, node.val, high);
    }
    return checkNode(root, -Infinity, Infinity);
};
```
