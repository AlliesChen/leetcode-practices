# Remove Nth Node From End Of List

Question: https://leetcode.com/problems/remove-nth-node-from-end-of-list

The `refs` is a reversed version of the linked list by inserting items' reference from the beginning of it, so that we know the end of the `head` parameter is `refs[0]`. Because of `n >= 1`, `refs[n]` must be an item precedes our target which is `refs[n-1]`. So, `refs[n-2]` must be an item that behind the target.

1. Build the reversed references list
2. If there is a preceding item of the target, and there is an item following the target, link the previous one to the next one, or set it to null.
3. If there is no previous item, set the head to start at the next one.
4. If both the previous and next items don't exist, set the head equals to null.

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const refs = [];
    function checkNodes(node) {
        refs.unshift(node)
        if (node.next) {
            checkNodes(node.next)
            return null
        }
        if (refs[n]) {
            refs[n].next = refs[n-2] ? refs[n-2] : null;
        } else if (refs[n-2]) {
            head = refs[n-2];
        } else {
            head = null;
        }
        return null;
    }
    checkNodes(head, 0)
    return head
};
```

## A solution with better space complexity

The previous solution I made needs an array with the same size of the linked list to track the nodes, hence, the space complexity of the solution is $O(n)$. However, with the two pointer method refer to [the solution by sgallivan](https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/1164542/js-python-java-c-easy-two-pointer-solution-w-explanation/), the space complexity can be decrease to just $O(1)$ extra space.

1. Move the fast pointer with n moves. So, either the pointer is on position n, or beyond 1 step of the position n, which means there is just one node in the list.
2. Keep move the two pointers till the fast one reach the end of the list.

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head;
    for (let i = 0; i < n; i += 1) { fast = fast.next }
    if (!fast) { return head.next }
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head
};
```
