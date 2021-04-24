//类型守卫
//typeof
//注意点：
//如果使用typeof 来实现类型保护 那么只能使用 ===/ !==   不严格的 == !=
//如果使用typeof 来实现类型保护 那么只能保护 number/string/boolean/symbol类型
// let fn = (x: number | string): number | string => {
//     //如果是string 那么就调用xxx.length
//     if (typeof x === "string") {
//         return x.length
//     } else {
//         //如果是number 那么就调用xxx.toFixed
//         return x.toFixed()
//     }
// }

//instanceof
//instanceof 就是用在类或者对象


// class Dog {
//     name: string
//     constructor() {
//         this.name = 'wawa'
//     }
// }
// class Cat {
//     age: number
//     constructor() {
//         this.age = 2
//     }
// }

// function fn(): string | number {
//     //生成随机数
//     let num = Math.random()

//     let res = num >= 0.5 ? new Dog() : new Cat()
//     // console.log(new Dog().name);

//     //如果是Dog我就返回Dog属性
//     if (res instanceof Dog) {
//         return res.name
//     } else {
//         //如果是Cat我就返回Cat属性
//         console.log(res.age);

//     }


// }