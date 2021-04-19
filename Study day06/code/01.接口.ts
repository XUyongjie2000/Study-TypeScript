

// //需求  ：定义一个函数getUserInfo 用来获取一个用户的姓名和年龄的字符串

// //userInterface代表接口的名字
// //name代表属性
// //string 代表属性的数据类型
// //在属性后面加？ 可选属性  不使用不会报错
// interface userInterface {
//     name: string,
//     age?: number
// }
// let getUserInfo = ({ name, age }: userInterface): void => {
//     console.log(`我的名字叫${name},我今年${age}`);
// }
// getUserInfo({
//     name: 'zs',
//     age: 18
// })