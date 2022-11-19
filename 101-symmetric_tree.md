# Symmetric Tree

Question: https://leetcode.com/problems/symmetric-tree/

As if the tree is symmetric:

1. Jump out of the loop when both nodes of `base` and `comparison` do not exist (null).

2. If one of the nodes does not exist (null), the tree is not symmetric. Return false.

3. If the nodes' value are not the same, the tree is not symmetric. Return false.

4. Do the recursion to check deeper in the tree until reach the point 1.

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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) { return true }
    function checkNodes(base, comparison) {
        if (!base && !comparison) { return true };
        if (base === null || comparison === null) { return false };
        if (base.val !== comparison.val) { return false };
        return checkNodes(base.left, comparison.right) && checkNodes(base.right, comparison.left);
    }
    return checkNodes(root.left, root.right);
};
```


