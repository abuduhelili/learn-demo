{
  // 需求：单独设置函数的参数类型 + 返回值类型
  // 具体：传入number类型
  // 必须给出参数定义类型，返回值可自动推断、可省略；

  // 函数声明
  function add(x: number, y: number) {
    return x + y;
  }

  const res = add(1, 6);
  console.log(res);

  // add('1',2)  // 报错
  // add(false,true)  // 报错

  // 函数表达式
  const add2 = function (x: number, y: number): number {
    return x + y;
  };
  add2(1, 2);

  // 箭头函数
  // ts中箭头函数参数括号不可省略
  const add3 = (x: number, y: number): number => {
    return x + y;
  };
  add3(1, 2);

  // 函数类型别名
  type FnType = (x: number, y: number) => number;
  // 类型别名通常用于箭头函数、函数表达式；不能用于函数声明
  const add4: FnType = (x, y) => {
    return x + y;
  };
  add4(5, 8);
  const add5: FnType = function (a, b) {
    return a + b;
  };
  add5;
}
