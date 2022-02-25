/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const parner = target - nums[i];
    if (parner in map) {
      return [map[parner], i];
    }
    map[nums[i]] = i;
  }
};
