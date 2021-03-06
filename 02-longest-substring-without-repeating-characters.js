/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const dict = {};
  const queue = [];
  let max = 0;
  Array.from(s).forEach((char) => {
    const index = char.charCodeAt(0);
    while (index in dict) {
      delete dict[queue.shift().charCodeAt(0)];
    }
    dict[index] = queue.push(char);
    max = queue.length > max ? queue.length : max;
  });
  return max;
};
