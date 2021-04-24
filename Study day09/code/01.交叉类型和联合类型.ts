



// //交叉类型
// //格式 ：type&type2&type...
// //交叉雷悉尼港是将多个类型合并为一个类型

// //需求：创建一个函数 用于两个对象 合并为一个对象 并返回

// let getNewObj = <T, U>(target: T, source: U): (T & U) => {
//     //类型推断  告诉TS 我返回的res 是T&U类型
//     let res = {} as (T & U);

//     res = Object.assign(target, source)

//     return res
// }

// console.log(getNewObj({ name: 'zs' }, { age: 18 }));
