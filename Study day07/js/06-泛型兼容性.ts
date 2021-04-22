// 泛型只影响使用的部分，不会影响声明的部分

// 声明了一个接口 T类型
// 由t类型来确定age的类型
// interface TypeInterface<T> {
//   age:T
// }

// interface PersonInterface<U> {

// }

// let s:TypeInterface<number> =5;
// let a:TypeInterface<string> ='a';

// s = a; // ok
// a = s; // ok 说句


// s = {
//   age: 5
// }

// a = s;


// interface TypeInterface<T> {
//   age: T
// }

// // interface PersonInterface<U> {

// // }
// class Father implements TypeInterface<number> {
//   age: number
//   constructor(){
//     this.age = 5;
//   }
// }

// class Mother implements TypeInterface<string> {
//   age: string
//   constructor(){
//     this.age = '5';
//   }
// }

// Father = Mother;
// Mother =Father;

// ts中版本的兼容性很多都不一样


