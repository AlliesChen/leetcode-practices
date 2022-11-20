# Reverse Linked List

Question: https://leetcode.com/problems/reverse-linked-list

As the description of the question mentioned, this can be done either iteratively or recursively.

## Intuition

<!-- Describe your first thoughts on how to solve this problem. -->

<!-- Describe your first thoughts on how to solve this problem. -->

By creating new ListNode(s) with each list item's `val` property and links its `next` property to those was created previously.

It doesn't be immutable, I just don't feel right to modify props directly with JavaScript.

## Recursive way

<!-- Describe your approach to solving the problem. -->

By recursively calls the function - `checkNodes`, have it parameters with the current `node` to the new ListNode's `val` property. And one more parameter for the `next` which is the item prior to the current one in the original linked list.

```javascript
"use strict"
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) {
        return null;
    }
    const result = new ListNode(head.val);
    function checkNodes(node, next) {
        if (!node) {
            return next;
        }
        const newNode = new ListNode(node.val, next);
        return checkNodes(node.next, newNode);
    }
    return checkNodes(head.next, result);
};
```

### Complexity

Traverse through the origin list takes n steps for the time complexity. For the space, I'm not sure about the complexity. I guess that as I create new ListNode for n times, it should have n spaces used; so:

- Time complexity: $O(n)$

- Space complexity: $O(n)$

## Iterative way

It's [a solution by Ulugbek_Leo](https://leetcode.com/problems/reverse-linked-list/solutions/2810835/easy-clear-and-iterative-solution-javascript/), just want to leave a note here:

```javascript
"use strict"
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

    let prev = null;
    let curr = head;

    while(curr){
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
};
```
