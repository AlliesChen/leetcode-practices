# Maximum Depth of Binary Tree

Question: https://leetcode.com/problems/maximum-depth-of-binary-tree

My first time attempt to solve the question:

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
 * @return {number}
 */
var maxDepth = function(root) {
    let depth = 0;
    if (!root) {
        return depth;
    }
    depth += 1;
    let leftNodes = 0;
    if (root.left) {
        leftNodes += maxDepth(root.left);
    }
    let rightNodes = 0;
    if (root.right) {
        rightNodes += maxDepth(root.right);
    }
    depth += Math.max(leftNodes, rightNodes);
    return depth;
};
```

## Deep First Search

I think [the solution](https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/1769367/python3-recursive-dfs-explained/) is belong to **PreOrder ** base on [the article](https://medium.com/coding-hot-pot/binary-tree-traversal-622caed2fad5):

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
 * @return {number}
 */
var maxDepth = function(root) {
    function dfs(root, depth) {
        if (!root) {
            return depth;
        }

        return Math.max(dfs(root.left, depth + 1), dfs(root.right, depth + 1));
    }
    return dfs(root, 0);
};
```
