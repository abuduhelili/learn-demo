{
  // 定义：自定义可选参数；
  // 模板：a?:string
  // let str: string = 'helloworld';
  // console.log(str.slice());
  // console.log(str.slice(5));
  // console.log(str.slice(3, 6));

  const print = (name: string, age: number, more?: string): void => {
    console.log(name, age, more);
  };
  print('zhangsan', 18);
  // print('zzz');  // 报错：不能必选缺少参数
  print('lisi', 20, 'more');

  // 必选参数不能再可选参数后
}
