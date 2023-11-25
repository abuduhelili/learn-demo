{
  // 类型断言：
  // 当函数获取到的结果类型较宽泛时，可使用断言 as 强行指定具体类型；

  // document.querySelector() 返回值为 HTMLElement

  const a = document.querySelector('#aa') as HTMLAnchorElement;
  const box = document.querySelector('#box') as HTMLDivElement;
  const p = document.querySelector('#pp') as HTMLParagraphElement;
}
