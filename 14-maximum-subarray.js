/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let current;
  let accum = 0;
  let max;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      accum = nums[i];
      max = accum;
      continue;
    }
    //from i = 1
    current = nums[i];
    if (accum + current < current) {
      start = current;
      accum = start;
    } else {
      accum += current;
    }
    max = max > accum ? max : accum;
  }
  return max;
};

// It can be done by Array.reduce() method
// though the performance isn't good
/*
 @param {number[]} nums
 @return {number}

 var maxSubArray = function(nums) {
    let max = nums[0];
    if (nums.length > 1) {
        nums.reduce((accum, current) => {
        if(accum+current < current) {
            accum = current;
        } else {
            accum += current;
        }
        max = (max > accum) ? max : accum;
        return accum
        });
    }    
    return max
};
*/
