// //需求 定义一个创建数组的方法 可以创建出指定长度的数组 并且可以用任意指定的内容填充这个数组
// //js
// // let getArray = function (length, value) {
// //     //返回一个长度为length的数组 数组中的元素都是value
// //     return new Array(length).fill(value)
// // }
// // let arr = getArray(5, 'abc')
// // console.log(arr);

// //ts
// let getArray = (length: number, value: any): any[] => {
//     return new Array(length).fill(value)
// }
// let arr = getArray(5, 'abc')
// console.log(arr);

// let res = arr.map(item => item.length)
// console.log(res);
