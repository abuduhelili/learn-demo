{
  // 接口：interface
  // 基础语法：
  // interface xxx {
  //   name: string;
  //   age: number;
  //   sayHi:()=>void;
  // }

  interface Person {
    name: string;
    age: number;
    sayHi: () => void;
  }
  const p: Person = {
    name: 'why',
    age: 18,
    sayHi() {
      console.log('hi');
    },
  };
  p.sayHi();

  // 区别：
  // interface只能约束对象；type可以定义约束任何类型；
  // 尽量使用type

  // 接口继承：
  // Student 具备 Person的所有属性和方法
  // 但是又有自己的特有属性和方法
  interface Student extends Person {
    score: number;
    sleep: () => void;
  }

  const s: Student = {
    name: 'sss',
    age: 18,
    score: 100,
    sayHi() {
      console.log('hi');
    },
    sleep() {
      console.log('sleeping-----');
    },
  };
  console.log(s.score);
  s.sleep();

  // type 实现 类似继承 效果？
  // & 与运算符 ：同是满足多个条件；
  type Person1 = {
    name: string;
    age: number;
    sayHi: () => void;
  };

  type Student1 = Person1 & {
    score: number;
    sleep: () => void;
  };

  const s1: Student1 = {
    name: 'sssss',
    age: 18,
    score: 100,
    sayHi() {
      console.log('hi');
    },
    sleep() {
      console.log('sleeping-----');
    },
  };
}
