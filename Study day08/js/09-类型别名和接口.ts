//  type uniType = string | number |boolean |symbol;

//  let value:uniType;
//  value = 5;
//  value = 'abc';
// 接口和类型别名异同

// 1.都可以描述属性或方法

// interface PersonInterface {
//     name: string;
//     study():void;
// }

// 定义类型别名
// type PersonType = {
//     name: string;
//     study():void
// }
// // 类似于类型别名的实现
// let obj:PersonType = {
//     name: 'zs',
//     study(){
//         console.log(1111);
//     }
// }


// 2.都允许拓展
// 接口能拓展 extends

// interface PersonInterface {
//     name: string;
//     study(): void;
// }

// interface ManInterface extends PersonInterface {
//     age: number;
// }


// class Man implements ManInterface {
//     name: string;
//     age: number;
    
//     constructor (){
//         this.name = 'zs'
//         this.age = 123;
//     }

//     study(){
//         console.log(1111);
//     }
// }

// 类型别名拓展 & 相当于合并
// type PersonType = {
//     name: string;
//     study():void
// } & {
//     age: number
// }

// // 类似于类型别名的实现
// let obj:PersonType = {
//     name: 'zs',
//     age: 18,
//     study(){
//         console.log(1111);
//     }
// }


// 3.type 可以声明基本类型别名，联合类型，元组等类型, interface不能

// type str = string;
// // 元组 相当于限制长度限制元素类型的数组
// type str1 = [string, number, boolean];
// // let s:str = 'aaa';
// let arr:str1 = ['aaa',1,true]

// interface typeInterface {
//     name: string
// }

// interface typeInterface  = string; // 语法错误


// 4.type不会自动合并



// interface PersonInterface {
//     name: string;
    
// }

// interface PersonInterface {
//     address: string;
    
// }

// interface PersonInterface {
//     family: string;
    
// }

// class Family implements PersonInterface{

// }


// type PersonType = {
//     name: string

// } & {
//     name: string

// }& {
//     name: string

// }

// type PersonType = {
//     name: string

// }

// type PersonType = {
//     name: string

// }