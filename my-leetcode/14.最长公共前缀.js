const s = ['flower', 'flow', 'flight', 'flodeff']; 

var longestCommonPrefix = function (strs) {
  let res = '';
  let minLength = 200;
  let minIndex = 0;
  for (let i = 0; i < strs.length; i++) {
    let length = strs[i].length;
    if (length < minLength) {
      minLength = length;
      minIndex = i;
    }
  }
  let minStrs = strs[minIndex]; // 'flow'
  let tag = false;
  for (let n = 0; n < minStrs.length; n++) {
    console.log(n);

    // n = 'f'  'l'  'o'  'w'
    for (let i = 0; i < strs.length; i++) {
      console.log(strs[i][n]);

      if (minStrs[n] != strs[i][n]) {
        tag = true;
        break;
      }
      if ((i = strs.length + 1)) {
        res += minStrs[n];
      }
    }

    if (tag) {
      // console.log('1');
      break;
    }
    // console.log('2');
  }

  console.log(res);
};
longestCommonPrefix(s);
