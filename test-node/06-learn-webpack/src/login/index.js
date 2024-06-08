// 导入
import { checkPhone, checkCode } from '../utils/check';
console.log(checkPhone('13800138000'));
console.log(checkCode('12345678'));
// webpack打包--运行
// npm run build
// 生成dist文件夹

// 修改webpack出入出口
// 项目文件夹下创建webpack.config,js文件
/*
const path = require('path');
module.exports = {
  // 入口
  entry: path.resolve(__dirname, 'src/login/index.js'),
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './login/index.js',
    // 生成打包内容之前，清空输出目录
    clean: true,
  },
};
*/
