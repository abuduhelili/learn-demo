/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    let now = map[s[i]];
    if (now > left) {
      // 反常
      total += now - left * 2;
    } else {
      total += now;
    }
    left = now;
  }
  return total;
};
// console.log(romanToInt('MCMXCIV'));
