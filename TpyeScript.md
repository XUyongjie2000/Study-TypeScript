## Type Script

#### Typescript 和JavaScript的区别

Type Script： 1. JavaScript 的超集用于解决大型项目的代码复杂性

​						2.可以在编译期间发现并纠正错误

​						3.强类型， 支持静态和动态类型

​						4.最终被编译成JavaScript代码，使浏览器可以理解

​						5.支持模块、泛型和接口

​						6.社区的支持仍在增长，而且还不是很大

JavaScript：   1.一种脚本语言，用于创建动态页面

​						2.作为一种解释型语言，只能在运行时发现错误

​						3.弱类型，没有静态类型选项

​						4.可以直接在浏览器中使用

​						5.不支持模块、泛型或接口

​						6.大量的社区支持以及大量文档和解决问题的支持

#### Type Script 如何转化为JavaScript文件

​						1.先创建一个文件

​						2.在终端输入 tsc 文件名字.ts

#### Type Script基础类型

###### Boolean类型

```typescript
//布尔类型boolean
let val2:boolean;
val2 =true
```

###### Number类型

```typescript
//定义了一个名称叫做val1的变量，这个变量中将来只能储存数值类型的数据
let val1:number;
val=123
```

###### Srting类型

```typescript
let val3:string;
val3="123"
```

###### Symbol类型

```typescript
const sym=Symbol();

let obj={

[sym]:"semlinker",
};
console.log(obj[sym]);//semlinker

```

###### Array类型

有两种方式可以定义数组。

第一种，可以在元素类型后面接上[]，表示由此类型元素组成的一个数组

第二种，使用数组泛型，Array<元素类型>

```typescript
let list:number[]=[1,2,3];
let list1:Array<number>=[1,2,3]
```

###### Tuple类型

元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。比如可以定义一对值分别为string和number类型的元组

```typescript
let x:[string,number]

x=['hello',10]//正确
x=[10,'hello']//错误
//注意：在使用Tuple类型的过程中 元素的数据类型要和Tuple的声明类型对号入座 写错会报错，多写会报错 写反会报错 少写也会报错
```







#### 接口

###### 为什么需要接口

JavaScript是弱类型语言，它并不会对我们传入的代码进行任何的检测，也不会对你调用的代码进行数据类型的提示，但是接口(interface)可以帮我们解决



###### 接口概念及语法

和Java语言相同 TypeScript中定义接口也是使用interface关键字来定义，Java中 我们说一个类实现了某一个接口 在这里我们只关心值得外形，只要传入得对象满足接口得外形，那么它就是被允许得

```typescript
//需求  ：定义一个函数getUserInfo 用来获取一个用户的姓名和年龄的字符串

//userInterface代表接口的名字
//name代表属性
//string 代表属性的数据类型
//在属性后面加？ 可选属性  不使用不会报错
interface userInterface {
    name: string,
    age?: number
}
let getUserInfo = ({ name, age }: userInterface): void => {
    console.log(`我的名字叫${name},我今年${age}`);
}
getUserInfo({
    name: 'zs',
    age: 18
})
```

###### 可选属性

默认情况下一个变量(对象)是对应得接口类型，那么这个变量(对象)必须实现接口中所有得属性和方法。

可选属性：带有可选属性得接口与普通得接口定义差不多，只是在可选属性名字定义得后面加一个？符号 可选属性得好处之一是可以对可能存在得属性进行预定义，好处之二是可以捕获引用了不存在得属性时得错误

```typescript
// ------------------可选属性-----------------------
interface userInterface {
    name: string,
    age?: number
}
let getUserInfo = ({ name, age }: userInterface): void => {
    if (age) {
        console.log(`我的名字叫${name},我今年${age}`);
    } else {
        console.log(`我的名字叫${name}`);
    }
}
getUserInfo({
    name: 'zs',
    age: 18
})
```

######只读属性

默认情况下 接口中定义的属性可读可写 但是有一个关键字 reaonly 定义的属性值 不可以进行修改 强制修改后报错

```typescript
//----------只读属性----------

interface IQuery {
    readonly page: number;
    findOne(): void;
}
const q: IQuery = {
    page: 1,
    findOne() {
        console.log("findOne");
    },
};
q.page = 10;//Cannot assign to 'page' because it is a read-only property.
```

###### 函数类型接口

interface还可以用来规范函数的形状。interface里面需要列出参数列表返回值类型的函数定义。写法如下：

定义了一个函数接口
接口接收三个参数并且不返回任何值
使用函数表达式来定义这种形状的函数

```typescript
// //函数类型接口

interface userInterface {
    (name: string, age: number, address: string): string
}

let getUserInfo: userInterface = (name, age, address): string => {
    return `我叫${name},今年${age},我家在${address}`
}
let res = getUserInfo('zs', 18, '中国')
console.log(res);

```

###### 接口的实现

接口除了定义某种类型规范 也可以和其他编程语言一样 让一个类去实现某个接口 那么这个类就必须明确去拥这个接口中的属性和实现其方法

```typescript
interface carInterface {
    color: string,
    brand: string,
    run(): void
}

class BMW implements carInterface {
    color: string
    brand: string

    constructor(color: string, brand: string) {
        this.color = color;
        this.brand = brand
    }
    run() {
        console.log(`我开着${this.color}的${this.brand}车`);
    }
}
let X5 = new BMW("蓝色", "宝马X5")

X5.run()
```

######接口的继承

和类一样 接口也能继承其他的接口 这相当于复制接口的所有成员。接口也是用关键字extends来继承

```typescript
interface whiteInterface {
    color: string
}

interface ageInterface {
    age: number
}

interface categoryInterface {
    category: string
}

interface CatInterface extends whiteInterface, ageInterface, categoryInterface {
    run(): void
}


class Cat implements CatInterface {
    color: string
    age: number
    category: string

    constructor() {
        this.color = "白色"
        this.age = 3
        this.category = "橘猫"
    }
    run() {
        console.log(`${this.color}的${this.category},今年${this.age}岁了`);
    }
}

let jumao = new Cat

jumao.run()
```

###### interface和type的区别

interface可以而type不可以
interface能够声明合并

```typescript
interface User {
    name: string
    age: number
}
interface User {
    sex: string
}
/*
User 接口为{
    name：string
    age:number
    sex:string
}
*/
```

Type可以而interface不可以

type可以声明基本类型别名 联合类型 元组等类型
type语句中还可以使用typeof获取实例的类型进行赋值

```typescript
//当你想获取一个变量的类型时，使用typeof
let div=document.createElement('div')
type B=typeof div
```

#### 泛型

###### 为什么需要泛型

需求：定义一个创建数组的方法，可以创建出指定长度的数组，并且可以用任意指定的内容填充这个数组

```typescript
let getArray = (value: number, items: number): number[] => {
    return new Array(items).fill(value)
}
console.log(getArray(5, 3));
console.log(getArray("abc", 3));


```

```typescript
let getArray = (value: any, items: number): any[] => {
    return new Array(items).fill(value)
}
let arr = getArray(5, 3);
let arr = getArray("abc", 3);//报错
let res = arr.map(item => item.length)
```

存在的问题：编写代码没有提示，因为TS的静态检测不知道具体是什么类型 哪怕代码写错了 也不会报错 因为TS的静态检测不知道具体是什么类型

###### 泛型是什么

泛型(Generics) 是允许同一个函数接受不同类型参数的一种模板。在编写代码的时候，我们既要考虑代码的健壮性，又要考虑代码的灵活性和可重用性，通过TS的静态检测能让我们编写的代码更加健壮，但是在变得健壮的同时缺丢失了灵活性和可重用性。通过泛型 不仅可以让我们的代码变得更加健壮 还能让我们的代码在变得健壮的同时保持灵活性和可重用性

###### 泛型语法

![声明泛型](C:\Users\99706\Desktop\Study-TypeScript\TypeScript photo\声明泛型.png)

![使用泛型](C:\Users\99706\Desktop\Study-TypeScript\TypeScript photo\使用泛型.png)

######使用泛型解决需求

```typescript
let getArray = <T>(value: T, items: number): T[] => {
    return new Array(items).fill(value)
}

let arr = getArray<string>("abc", 5);
let arr = getArray<number>(3, 4);
//let res =arr.map(item=>item.length);
//console.log(res);

```

###### 泛型约束

默认情况下 我们可以指定泛型为任意类型 但是有些情况下我们需要指定的类型满足某些条件后才能指定那么这个时候我们就可以使用泛型约束

```typescript
let getArray = <T>(value: T, items: number): T[] => {
    return new Array(items).fill(value);
}

// let arr = getArray<string>("abc", 5);
let arr = getArray<number>(3, 4)
//let res =arr.map(item=>item.length)
```

###### 在泛型中使用类型参数

一个泛型被另一个泛型约束 就叫做泛型约束中使用类型参数

需求：定义一个函数用于根据指定得Key获取对象得value

```s
let getProps=(obj,key)=>{
return obj[key];
}
```

