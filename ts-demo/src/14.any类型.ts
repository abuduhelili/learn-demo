{
  // any 类型:
  //
  // function fn(a,b) {};  // 隐式含有 any 类型
  // let a;                // 隐式含有 any 类型

  let obj: any = { x: 100 };
  obj.y = 200;
}
