{
  // 枚举：
  //  默认 0 开始自增
  //  可以赋值：数字，字符串等都可以
  //  参数通常大写
  // 可以理解为对象

  // enum Direction {
  //   Left, // 0
  //   Right, // 1
  //   Up, // 2
  //   Down, // 3
  // }

  enum Direction {
    Left = '左',
    Right = '右',
    Up = '上',
    Down = '下',
  }

  function changeDirection(direction: Direction) {
    console.log(direction);
  }

  changeDirection(Direction.Left);
  changeDirection(Direction.Right);
  changeDirection(Direction.Up);
  changeDirection(Direction.Down);
}
