{
  // 泛型：
  // 调用函数时来指定传入参数类型;类型由外部确定

  // <T>      声明泛型
  // val:T    定义泛型

  function get<T>(val: T) {
    return val;
  }

  const res1 = get<number>(123);
  const res2 = get<string>('hello');
  const res3 = get<boolean>(true);
  // const res4 = get<string>(1)  // 报错

  //
  // 简化泛型 ：可以不写<> ，可自动推断，为 字面量类型
  const res5 = get(123);
  const res6 = get('hello');
  const res7 = get(true);
}
