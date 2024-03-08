{
  // 泛型：多个泛型
  // 新语法：keyof Obj  // Obj的所有属性
  //

  function get<O, K extends keyof O>(obj: O, key: K) {
    return obj[key];
  }

  const p1 = {
    name: 'zs',
    age: 18,
  };

  console.log(get(p1, 'name'));
  console.log(get(p1, 'age'));
  // console.log(get(p1, 'gender')); // 报错
}
