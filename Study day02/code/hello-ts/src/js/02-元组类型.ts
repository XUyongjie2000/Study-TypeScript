// 元组
// 数组的特点
// ts中的数组和js中的数组
// 1.js中的数组元素什么类型都可以
// 2.js中的数组长度是可以随便变的

// 元组的特点
// 1.ts中的元组的元素数据类型是对号入座的
// 2.ts中的元组的长度不可变

// 第一步: 规定元组的元素的类型和长度
let aTuple: [string, number, boolean];

// 第二步: 赋值
// aTuple = ['aaa',1,true];
// console.log(aTuple);

// 注意: 元组的元素是不可多 不可少 是排列

// 错误
// aTuple = [1,'aaa',true];
// console.log(aTuple);

// 错误
// aTuple = ['aaa',1,true,false];
// console.log(aTuple);


