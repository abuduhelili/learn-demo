// // 1.CommonJs 标准：导入
// const obj = require('./utils.js');

// 2.ES标准：导入
// 此方法Node默认不支持，需要在当前文件夹创建package.json文件，配置{"type":"module"}
import obj from './utils.js';

// // 3.命名：导入
// import { hello, getArrySum } from './utils.js';
// let result1 = getArrySum([1, 2, 3, 4, 5]);
// let result2 = hello;

console.log(obj);
let result1 = obj.getArrySum([1, 2, 3, 4, 5]);
let result2 = obj.hello;

console.log(result1, result2);
