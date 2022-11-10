# House Robber

Refer to the concept from [the solution by archit91](https://leetcode.com/problems/house-robber/solutions/1605797/c-python-4-simple-solutions-w-explanation-optimization-from-brute-force-to-dp/) and the [solution by bloomh](https://leetcode.com/problems/house-robber/solutions/2779597/comprehensive-python-explanation/?page=2).

With dynamic programming:

- Time Complexity: $O(N)$
- Space Complexity: $O(1)$

Let's think with what is called [opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost). If we decide to steal the current house we are, we cannot steal the next house then. From a list that only contains one item, we will just take the only one as the answer of the problem. If there are just two items in the list, we will compare them, and take the larger one.

So, the opportunity cost shows up when there are three items. For example, a list - `[2, 1, 1, 2]`:

1. We think about whether to take the first item which is 2, as there is nothing to compare with, so, YES. `thisOne` = `back1 -> 0` vs `(num[0] -> 2) + (back2 -> 0)` = 2
2. And we move forward to the second house. This time we think about that should we put the money back to the first house and then take the money from this one (the second house) instead? `thisOne` = `back1 -> 2` vs `(num[1] -> 1) + (back2 -> 0)`. We get 1, and **the opportunity cost is 2**. So, NO, we keep the money from the first house and go to the next one.
3. As the third house isn't a adjacent house with the first one, we should consider the opportunity cost of robbing this house bring a benefit that we can keep the money from the first one. So, it's `back2 -> 2` + `nums[2] -> 1` (the third house) vs `back1 -> 1` = 3. We should take it. Notice that the trace of our opportunity cost is now: `[0, 2, 3]`.
4. The 4th house, let's just do the math, `thisOne` = `back1 -> 3` vs `(num[3] -> 2) + (back2 -> 2)` = 4. It's not obvious if we just consider taking the money from the current one and the last two step one. **The opportunity cost list** is now: `[0, 2, 3, 4]` which leaves a record that help us imagine the cost from taking the current one.

```javascript
"use strict"
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let back1 = 0, back2 = 0, thisOne = 0;
    for (i = 0; i < nums.length; i += 1) {
        thisOne = Math.max(back1, nums[i] + back2);
        back2 = back1;
        back1 = thisOne;
    }
    return thisOne;
};
```
