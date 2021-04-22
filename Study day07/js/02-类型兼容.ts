// 数据类型兼容
// 类型兼容性用于确定一个类型是否能赋值给其他类型。
// 协变（Covariant）：只在同一个方向；
// 逆变（Contravariant）：只在相反的方向；
// 双向协变（Bivariant）：包括同一个方向和不同方向；
// 不变（Invariant）：如果类型不完全相同，则它们是不兼容的。

// 接口兼容性

// 检查接口的兼容性  接口能不能赋值给对象

// interface PersonInterface {
//   age: number;
// }
// let t:PersonInterface;

// let p1 = {age: 18};
// let p2 = {name: 'zs'}
// let p3 = {age: 18,name: 'zs'}
// // p1中有一个属性是age 
// // PersonInterface 接口 属性也是age
// t = p1;
// t = p2;
// t = p3; //  可多不可少，就可以实现兼容

// 会递归检查

// interface PersonInterface {
//   age: number;
//   name: {
//     firstName: string
//   }
// }

// let k:PersonInterface;

// let p1 = {age: 18}
// let p2 = {age: 19, name: 'zw'}
// let p3 = {age: 19, name: {firstName: 'zw'}}

// k = p1;
// k = p2;
// k = p3;


// 声明了一个接口
// 

// interface fn {
//   (x:number, y:number):void
// }

// let fn1:fn = (x:number, y:number)=>{

// }

// 接口的实现 只有类能实现接口 然后通过实例类来创建对象
// 接口在ts中相对来讲比较泛，不仅仅可以让类来实现接口 ，更多的用处是 一种结构化的数据类型，它是一个规定或者是规范,告诉你这个数据应该如何写



// 问题: 函数一定是要实现接口要求的参数的

// interface FnInterface {
//   (a:number, b:string):void
// }

// let fn:FnInterface = (a:number) =>{
//   console.log(a);
// }

// fn(1)