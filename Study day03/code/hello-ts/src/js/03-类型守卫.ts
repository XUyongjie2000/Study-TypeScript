// TypeScript 熟知 JavaScript 中 instanceof 和 typeof 运算符的用法。如果你在一个条件块中使用这些，TypeScript 将会推导出在条件块中的的变量类型


// function useStr(str:string|number){
//   // 如果这里不是string 那么不能使用str的substr方法
//   // 如果是string类型 那么就可以使用 写错了substr也会报错

//   if (typeof str === 'string') {
//     // str.substr(1,2);
//     // str.sustr(1,2); str已经被判断到string类型 所以如果你写错了substr未sustr那么ts检测到了就报错
//   }else {
//     // 现在经过判断 肯定str不是string 那么开发者再调用str的substr方法 就会报错 
//     str.substr(1,2);
//   }

//   str.substr(1,2); // 这里也会报错 是因为str的类型不确定
// }

// let arr = []
// let obj = {}

// typeof arr obj => obj


// interface A {
//   x: number;
// }

// interface B {
//   y: string;
// }

// function doStuff(q: A | B) {
//   if ('x' in q) {
//     // q: A
//     console.log(q.y);
//     console.log(q.x);
//   } else {
//     // q: B
//     console.log(q.x);
//   }
// }


let x:string | number|boolean;

x = 5;
x = true;

type sssy=string | number|boolean;

let xyz:sssy = 6;


