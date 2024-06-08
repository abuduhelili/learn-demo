/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  } else {
    return x.toString() == x.toString().split('').reverse().join('');
  }
};
