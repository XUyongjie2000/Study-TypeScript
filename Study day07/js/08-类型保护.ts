// 注意点:
// 如果使用typeof来实现类型保护, 那么只能使用 === / !==
// 如果使用typeof来实现类型保护, 那么只能保护 number/string/boolean/symbol类型
// if(typeof value == 'string'){
//     console.log(value.length);
// }else{
//     console.log(value.toFixed());
// }

// 除了可以通过typeof类实现类型保护以外, 我们还可以通过instanceof来实现类型保护
// class Person {
//     name:string = 'lnj';
// }
// class Animal {
//     age: number = 18;
// }
// let getRandomObject = ():(Person | Animal)=>{
//     let num = Math.random();
//     return (num >= 0.5) ? new Person() : new Animal();
// };
// let obj = getRandomObject();
// console.log(obj);
// if(obj instanceof Person){
//     console.log(obj.name);
// }else{
//     console.log(obj.age);
// }
