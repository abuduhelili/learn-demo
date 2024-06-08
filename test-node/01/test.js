// fs模块
const fs = require('fs');
const path = require('path');

// // 写入
// fs.writeFile('txt.txt', 'hello txt', err => {
//   if (err) {
//     console.log(err);
//   } else console.log('成功');
// });

// 读取
fs.readFile(path.join(__dirname, './txt.txt'), (err, data) => {
  if (err) {
    console.log(err);
  } else console.log(data.toString());
});
