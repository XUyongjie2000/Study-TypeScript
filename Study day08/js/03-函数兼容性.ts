// "类型"兼容性用于确定一个类型是否能赋值给其他类型。
// a可以赋值给b   b一定是包含a的
// 参数个数
// 宁可多了 也别少了
// let fn1 = (x:number, y:number):number =>{return 1};
// let fn2 = (z:number,y:number):void =>{};
// // let fn4 = (w:number,x:number,y:number,z:number):void=>{}
// let fn3 = (x:string, y:string):void =>{};

// fn1 = fn2; // 


// fn2 = fn1; // 

// fn1 = fn2;
// fn4 =fn1


// 参数类型
// let fn1 = (x:number, y:number):void =>{};
// // let fn2 = (x:number,):void =>{};
// let fn3 = (x:string, y:string):void =>{};

// fn1 = fn2; // 参数多的可以接收参数少的函数的赋值
// fn2 = fn1; // 参数少的不能接受参数多的

// fn3 = fn1; // 参数类型不同 不可以相互赋值
// fn1 = fn3;

// 返回值类型
// let fn1 = (x:number, y:number):number =>123;
// let fn2 = (x:number):number =>456;
// let fn3 = (x:string, y:string):string =>"nihao";

// fn1 = fn2;
// fn1 = fn3; // 返回值类型必须一模一样，不一样就类型不兼容



// 函数双向协变
// 参数的双向协变
// 或: 要么是number 要么是string
// let fn1 = (x:(number|string)):void=>{};
// // 只有一个类型就是number
// let fn2 = (y: number):void=>{}

// fn1 = fn2;
// fn2 = fn1;

// 返回值的双向协变(注意版本 版本不同结果也有可能不同)

// let fn1 = (x:boolean):(string|number) => x ? "aaa" : 123;
// let fn2 = (y:boolean):string =>'aaa'

// fn1 = fn2; // 单一数据类型可以赋值联合类型
// fn2 = fn1; // 联合类型不能赋值给单一类型

// 函数重载
// 函数的重载: 对于同一个函数,根据参数的个数和类型的不同，可以调用不同的功能代码

// 多个数的相加

// function add(u:number, v:number):number;
// // function add(u:number, v:number, w:number):number;
// // function add(u:number, v:number, w:number,x:number):number;
// // function add(u:number, v:number, w:number,x:number,y:number):number;
// function add(num1:number, num2:number):number {
//     // if (num1 && num2) {
//     //   return num1+num2;
//     // } else if (num1&&num2&&num3){
//     //   return num1+num2+num3;
//     // } else if (num1&&num2&&num3&&num4){
//     //   return num1+num2+num3+num4;
//     // }
//     return 2;
// }



// 重载确实没有什么用
// 原生js中确实没有重载
// ts中所有的特性都是模拟出来的

// console.log(add(1,2)) // 3
// console.log(add(1,2,3)) // 3
// console.log(add(1,2,3,4)) // 3
// console.log(add(1,2,3,4,5))


// function subAdd(u:number, v:number):number;
// function subAdd(num1:number, num2:number):number {
//     return 2;
// }

// 重载是不能互相赋值的
// subAdd = add;
// add = subAdd;
