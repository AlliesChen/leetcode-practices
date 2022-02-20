# Valid Parentheses

Problem: https://leetcode.com/problems/valid-parentheses/

## Solution

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const meet = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack = [];
  function test(c) {
    if (c == "(" || c == "[" || c == "{") {
      stack.push(meet[c]);
    } else if (c == ")" || c == "]" || c == "}") {
      if (c !== stack[stack.length - 1]) {
        return false;
      } else {
        stack.pop();
      }
    }
    return true;
  }
  return s.split("").every(test) && !stack.length;
};
```
