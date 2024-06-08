const hello = 'Hello World';
const getArrySum = arr => arr.reduce((pre, cur) => pre + cur, 0);

// // 1.CommonJs标准 ：导出
// module.exports = {
//   hello: hello,
//   arraySum: getArrySum,
// };

// 2.ES6标准：
export default {
  hello,
  getArrySum,
};

// // 3.命名:导出
// // export const hello = 'Hello World';
// // export const getArrySum = arr => arr.reduce((pre, cur) => pre + cur, 0);
