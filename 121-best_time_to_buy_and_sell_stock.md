# Best Time To Buy And Sell Stock

Question: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

[Kadane’s Algorithm — (Dynamic Programming) — How and Why does it Work? | by Rohit Singhal | Medium](https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d) has good perspectives about the topics and with nice diagram to help understand them.

## Solution

Refer to the solution: [Comprehensive Python Solution - Thought Process & Examples | by bloomh | LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/2643827/comprehensive-python-solution-thought-process-examples/).

![best_time_to_buy_and_sell_stock](https://i.imgur.com/RDWbvAP.gif)

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0];
    let profit = 0;
    for (i = 0; i < prices.length; i+=1) {
        // always assume to sell today
        const sell = prices[i];
        // max profit comes from the sum of every maximum in the iteration.
        profit = Math.max(sell - buy, profit);
        // if today's price is better, update the price of buying.
        buy = Math.min(prices[i], buy);
    }
    return profit;
};
```
