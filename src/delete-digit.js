const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
  
  if (arr.length > 2) {
    for (i = 1; i < arr.length; i++){
      if (arr[i] > arr[i - 1]) {
        arr.splice(i - 1, 1);
      }
    }} else {
      arr.splice(arr.indexOf(Math.min(arr[0], arr[1])), 1);
    }

  return +arr.join('');
}

module.exports = {
  deleteDigit
};
