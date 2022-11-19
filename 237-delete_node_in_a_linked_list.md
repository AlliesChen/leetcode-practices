# Delete Node in a Linked List

Question: https://leetcode.com/problems/delete-node-in-a-linked-list

The keys to solve the question are:

1. You will **not be given access** to the first node of `head`

2. The `node` to be deleted is **in the list** and is **not a tail** node

We don't get to think what node should be deleted. The input for the parameter `node` is just the part of the linked list (without the head and the tail). So the answer is just to link the current node to the next one:

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
```


