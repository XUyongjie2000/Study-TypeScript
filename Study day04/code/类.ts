//类的概念
// class Person {
//     //属性
//     name: string
//     //构造函数
//     constructor(msg: string) {
//         //初始化name
//         this.name = msg
//     }
//     //方法
//     study(msg: string): void {
//         console.log(`${msg}天天打呼噜`);
//     }
// }

// // 通过类来实例化对象
// let zjp = new Person("张建平")


// zjp.study('张建平')


//类的继承
//继承的语法 extends
//继承的应用场景 vue react中组件的ts写法

//基类（父类）
class Animal {
    age: number

    constructor(age: number) {
        this.age = age
    }
    eat(): void {
        console.log("建平爱吃屎");
    }
}

//派生类（子类）

class zjp extends Animal {
    name: string

    constructor(name: string) {
        super(1)
        this.name = name
    }

    dadong() {
        console.log(`${this.name}会打洞`);

    }
}
let Zhang = new zjp('Zhang')
console.log(Zhang.age);
Zhang.eat() 
Zhang.dadong()
