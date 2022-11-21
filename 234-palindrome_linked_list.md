# Palindrome Linked List

Question: https://leetcode.com/problems/palindrome-linked-list/

Refer to [the solution by luluboy168](https://leetcode.com/problems/palindrome-linked-list/solutions/2466602/python-3-different-approaches-detailed-explantion-easy-understand-beginner-friendly/), I think it's easier to understand than the solution that applies Floyd's Cycle Detection Algorithm.

Its a recursive way having the `back` (from the parameter) run to the end of the linked list, so the `equal_so_far` will be true at first. And then:

1. `value_equal` - the result of comparing each node at the start and the end. `front` = the head of the linked list, `back` = the end of the list.
2. moving the `front` pointer forward to the next node.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let front = head;
    function checkNode(back) {
        if (!back) { return true }
        const equal_so_far = checkNode(back.next);
        const value_equal = (front.val === back.val);
        front = front.next;
        return equal_so_far && value_equal;
    }
    return checkNode(head)
};
```

## Floyd's + Reversal

This is [a solution is by sgallivan](https://leetcode.com/problems/palindrome-linked-list/solutions/1137027/js-python-java-c-easy-floyd-s-reversal-solution-w-explanation/). [Floyd's cycle detection algorithm](https://en.wikipedia.org/wiki/Cycle_detection#Floyd's_tortoise_and_hare) uses two pointers, one moves step by step and the other one moves x times faster than the slow one. So, in this question, x = 2 as the linked list appears symmetric.

1. The first `while` loop is going to find the mid and the end of the linked list, in this case, it's slow and fast respectively.
2. Prepare to build a reserved version of the last half part of the linked list, set the `prev` which will be the end of that list. Thus, its `next` property should be set to null, too.
3. The second `while` loop is going to go through the last half part of the linked list with `slow` and keep building the reversed version of the list.
4. Set fast to the head, slow to the end of the reversed version of the last half part of the list.
5. The third `while` loop is the comparisons of each nodes that is corresponded.

```javascript
var isPalindrome = function(head) {
    let slow = head, fast = head, prev, temp
    while (fast && fast.next)
        slow = slow.next, fast = fast.next.next
    prev = slow, slow = slow.next, prev.next = null
    while (slow)
        temp = slow.next, slow.next = prev, prev = slow, slow = temp
    fast = head, slow = prev
    while (slow)
        if (fast.val !== slow.val) return false
        else fast = fast.next, slow = slow.next
    return true
};
```
