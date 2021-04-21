//泛型值影响使用的部分 不会影响声明的部分
//声明了一个接口T类型
//有T类型来确定age的类型
// interface TpyeInterface<T> {
//     age: T
// }

// class Father implements TpyeInterface<number>{
//     age: number
//     constructor() {
//         this.age = 5
//     }
// }

// class Mother implements TpyeInterface<string>{
//     age: string
//     constructor() {
//         this.age = '5'
//     }
// }

// Father = Mother
// Mother = Father