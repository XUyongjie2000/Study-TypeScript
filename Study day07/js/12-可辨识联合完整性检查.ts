// interface Square {
//     kind: "square"; // 共同的可辨识特征
//     size: number;
// }
// interface Rectangle {
//     kind: "rectangle"; // 共同的可辨识特征
//     width: number;
//     height: number;
// }
// interface Circle {
//     kind: "circle"; // 共同的可辨识特征
//     radius: number;
// }
// /*
// Shape就是一个可辨识联合
// 因为: 它的取值是一个联合
// 因为: 这个联合的每一个取值都有一个共同的可辨识特征
// * */
// type Shape = (Square | Rectangle | Circle);
// /*
// 在企业开发中如果相对可辨识联合的完整性进行检查, 那么我们可以使用
// 方式一: 给函数添加返回值 + 开启strictNullChecks
// 方式二: 添加default + never
// * */
// function MyNever(x: never):never {
//     throw new Error('可辨识联合处理不完整' + x);
// }
// function aera(s: Shape):number{
//     switch (s.kind) {
//         case "square": return s.size * s.size;
//         case "rectangle": return s.width * s.height;
//         case "circle": return  Math.PI * s.radius ** 2; // **是ES7中推出的幂运算符
//         default:return MyNever(s)
//     }
// }