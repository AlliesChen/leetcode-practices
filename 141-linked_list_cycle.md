# Linked List Cycle

Question: https://leetcode.com/problems/linked-list-cycle/description/

[The solution by poppinlp](https://leetcode.com/problems/linked-list-cycle/solutions/1829768/javascript-easy-to-understand-slow-fast-pointers-detailed-explanation/) applies [Floyd's cycle detection algorithm](https://www.geeksforgeeks.org/floyds-cycle-finding-algorithm/) which is used to find a loop in a linked list. It uses two pointers, one moves one step by step, and the other one moves twice as fast as the last one. 

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head;
    while (fast && fast.next) {
        head = head.next;
        fast = fast.next.next;
        if (head === fast) { return true }
    }
    return false;
};
```

- Time complexity: $O(n)$

- Space complexity: $O(1)$
