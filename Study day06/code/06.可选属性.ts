// // ------------------可选属性-----------------------
// interface userInterface {
//     name: string,
//     age?: number
// }
// let getUserInfo = ({ name, age }: userInterface): void => {
//     if (age) {
//         console.log(`我的名字叫${name},我今年${age}`);
//     } else {
//         console.log(`我的名字叫${name}`);
//     }
// }
// getUserInfo({
//     name: 'zs',
//     age: 18
// })