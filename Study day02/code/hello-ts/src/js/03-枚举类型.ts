// 枚举类型是TS为JS扩展的一种类型, 在原生的JS中是没有枚举类型的
// 枚举用于表示固定的几个取值
// 例如: 一年只有四季、人的性别只能是男或者女
// 默认情况下，从0开始为元素编号。
// 你也可以手动的指定成员的数值。


// 语法:

// enum 枚举类型的名字 {键,键,键}

// enum Gender {
//   male,// 男士
//   female, // 女士
//   secret
// }

// 声明变量并把枚举类型的值赋值给某一个变量

// let x:Gender = Gender.female;
// let x:Gender = Gender.female;
// console.log(x);

// 能不能给所有的枚举类型的值赋值
// enum Gender {
//   male=2,// 男士
//   female=6, // 女士
//   secret=8
// }

// 能不能只给第一个赋值
// enum Gender {
//   male=8,// 男士
//   female, // 女士
//   secret
// }

// let x:Gender = Gender.secret;
// console.log(x);


// 能不能只给第二个赋值 如果第二个赋值 那么第一个会是几 第三个会是几

enum Gender {
  male,// 男士
  female=-4, // 女士
  secret
}

let x:Gender = Gender.secret;
console.log(x);