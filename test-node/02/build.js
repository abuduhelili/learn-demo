const fs = require('fs');
const path = require('path');
// 读取
fs.readFile(path.join(__dirname, 'public/test-1.html'), (err, data) => {
  if (err) {
    console.log(err);
  } else {
    // html
    const htmlStr = data.toString();
    // 正则替换字符串
    const resStr = htmlStr.replace(/[\r\n]/g, '');
    // 写入
    fs.writeFile(path.join(__dirname, 'dist/index.html'), resStr, err => {
      if (err) {
        console.log(err);
      } else {
        console.log('压缩成功');
      }
    });
  }
});
