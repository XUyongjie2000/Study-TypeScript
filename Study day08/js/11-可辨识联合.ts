// /*
// 1.什么是可辨识联合
// 具有共同的可辨识特征。
// 一个类型别名, 包含了具有共同的可辨识特征的类型的联合。
// * */

// // 正方形
// interface Square {
//     kind: "square";  //共同的可辨识特征
//     size: number; // size*size
// }
// // 长方形
// interface Rectangle {
//     kind: "rectangle"; //共同的可辨识特征
//     width: number;
//     height: number; // width *height
// }

// // 圆
// interface Circle { // 共同的可辨识特征
//     kind: "circle";
//     radius: number; // Math.PI * radius * radius
// }

// type Shape = Square | Rectangle | Circle;

// // let s:Shape;

// // 写一个功能 用来计算面积
// // 根据可辨识特征来相应的计算
// function getArea(s: Shape) {
//     switch (s.kind) {
//         case "square":
//             return s.size * s.size;
        
//         case "rectangle":
//             return s.height * s.width;

//         case "circle":
//             // return Math.PI* s.radius* s.radius
//             return Math.PI* s.radius ** 2; // **2 代表幂 
//     }
// }

// console.log(getArea({
//     kind: "square",  //共同的可辨识特征
//     size: 3
// }))