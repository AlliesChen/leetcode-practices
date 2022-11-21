# Merge Two Sorted Lists

Question: https://leetcode.com/problems/merge-two-sorted-lists/

Refer to [the solution by artod](https://leetcode.com/problems/merge-two-sorted-lists/solutions/1826693/python3-merging-explained/):

1. Create a new `ListNode` called dummy as the `head` reference for the answer to submit.
2. `cur` is needed as a pointer to mark the end of the `dummy` list.
3. Once a list has come to the end, link the `cur.next` to the head of the remains of the other list.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode;
    let cur = dummy;
    while (list1 && list2) {
        if(list1.val < list2.val) {
            cur.next = list1;
            list1 = list1.next;
        } else {
            cur.next = list2;
            list2 = list2.next;
        }
        cur = cur.next;
    }

    if (list1 || list2) {
        cur.next = list1 ? list1 : list2;
    }

    return dummy.next;
};
```
