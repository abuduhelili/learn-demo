{
  // 字面量类型：把字面量当作类型使用；
  // const 不可修改，所以将它看作一个类型；这叫：字面量类型；
  const str2 = 'hello';

  // 通常：结合type使用
  type Direction = 'left' | 'right' | 'up' | 'down';

  function changeDirection(direction: Direction) {
    console.log(direction);
  }

  changeDirection('down');
  changeDirection('up');
  // changeDirection('hello')   // 报错
}
