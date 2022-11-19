# Binary Tree Level Order Traversal

Question: https://leetcode.com/problems/binary-tree-level-order-traversal

Refer to [the solution](https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/2274383/python-recursive-and-iterative-solutions/) by TLDRAlgos:

- Time Complexity: $O(n)$

- Space Complexity: $O(n)$

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = []
    
    function checkNode(node, depth) {
        if (!node) { return result }
        if (depth >= result.length) {
            result.push([]);
        }
        result[depth].push(node.val);
        checkNode(node.left, depth + 1);
        checkNode(node.right, depth + 1);
    }
    checkNode(root, 0)
    return result;
};
```
