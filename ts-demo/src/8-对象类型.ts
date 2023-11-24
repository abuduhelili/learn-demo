{
  // 定义：对象类型

  type Person = {
    name: string;
    age: number;
    gender: string;
    girlFriend?: string; // 可选属性
    sayHi: (content: string) => void; // 函数类型
    // 或者
    // sayHello(content: string): void;
  };
  let obj1: Person = {
    name: 'why',
    age: 18,
    gender: '男',
    girlFriend: 'avnoaivn', // 可选属性，如果不写，就是undefined，可以不写girlFriend: true,
    sayHi(content: string) {
      console.log('hi' + content);
    },
  };

  let obj2: Person = {
    name: 'kobe',
    age: 40,
    gender: '男',
    sayHi(content: string) {
      console.log('hi' + content);
    },
  };

  obj1.sayHi('hello----1');
  console.log(obj1.girlFriend);

  obj2.sayHi('hello----2');
  console.log(obj2.girlFriend);

  // 可选属性的使用
  obj1.girlFriend?.slice(1);
  obj1.girlFriend?.slice(1);
}
