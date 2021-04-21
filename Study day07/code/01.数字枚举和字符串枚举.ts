//TS支持两种枚举  数字枚举和字符串枚举

//1.数字枚举
// enum Gender {
//     Male = 3,
//     Female
// }
//底层用的就是数字类型
// console.log(Gender.Female);

//2.数字枚举注意点
//2.1如果是给Male赋值 那么后面的值都改变
//2.2如果是给Female赋值 那么Male不改变 Female的值发生改变
//2.3也可以给male和female分别赋值
//2.4数字枚举不仅可以使用默认值 还可以使用常量、计算后的结果作为值
// const num = 6;

// function aa(){
//     return 222
// }
// enum Gender {
//     Male = num,
//     Female = aa()
// }


//3.枚举反向映射
//可以根据枚举值获取到原始值
//也可以根据原始值获取到枚举值
// enum Gender {
//     Male = 3,
//     Female
// }
// console.log(Gender.Male);
// console.log(Gender[3]);


//4.字符串枚举
//枚举反向映射 在字符串枚举中能否实现？不能 单向
// enum Gender {
//     Male = "aaa",
//     Female = "bbb"
// }
// console.log(Gender.Male);
// console.log(Gender[aaa]);


//5.字符串枚举的注意点
//注意点：如果使用字符串给前面的枚举值赋值了 那么后面的枚举值也必须手动赋值（无论是字符串还是数字都可以）
//注意点：如果使用字符串给前面的枚举值赋值了字符串 那么后面的也必须赋值 如果不赋值 那么就使用默认值 也会被ts认为是字符串枚举
//注意点：和数字枚举不一样 字符串枚举不能使用常量或者计算结果给的枚举值赋值
//注意点：虽然字符串枚举不能够使用常量或计算结果给枚举值赋值 但它可以使用内部的其他枚举值来赋值


//6.异构枚举
//枚举中既包括数字又包含字符串 我们称之为异构枚举
//注意点：如果是字符串枚举 那么无法通过原始值获取到枚举值

// enum Gender {
//     Male = 5,
//     Female = 'addd'
// }

// enum Gender {
//     Male = "addd",
//     Female = 5
// }