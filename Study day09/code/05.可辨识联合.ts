// /*
// 什么是可辩识联合
// 具有共同的可辨识特征
// 一个类型别名 包含了具有共同的可辨识特征的类型的联合
// */

// //正方形
// interface Square {
//     kind: "square" //共同的可辨识特征
//     size: number
// }

// //长方形
// interface Rectangle {
//     kind: "rectangle" //共同的可辨识特征
//     width: number
//     height: number
// }

// //圆
// interface Circle {
//     kind: "circle" //共同的可辨识特征
//     radius: number
// }

// type Shape = Square | Rectangle | Circle

// let s: Shape
// //写一个功能 用来计算面积
// //根据可辨识特征来相应的计算
// function getArea(s: Shape) {
//     switch (s.kind) {
//         case "square":
//             return s.size * s.size
//             break;
//         case "rectangle":
//             return s.height * s.width
//             break;
//         case "circle":
//             return Math.PI * s.radius ** 2 //** 代表平方
//             break;
//     }
// }

// console.log(getArea({
//     kind: "square",
//     size: 3
// }));
