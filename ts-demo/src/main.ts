{
  // 泛型：类型约束

  // 定义接口
  interface ILength {
    length: number;
  }
  // 添加约束(给泛型添加更高的约束)
  function get<T extends ILength>(val: T) {
    console.log(val.length);
    return val;
  }

  //
  // 转换成数组：
  // function get<T>(val: T[]) {
  //   return val;
  // }
  // let res = get([1, 2, 3, 'aaa']);
}
