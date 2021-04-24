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

###### Enum类型

枚举类型是TS为JS扩展的一种类型 在原生的JS中是没有枚举型的
枚举用于表示固定的几个值
例如：一年只有四季、人的性别只能是男或者女
默认情况下，从0开始为元素编号。
你也可以手动的指定成员的数值
例如，我们将上面的例子改成从1开始编号：

```
enum Color{Red,Green,Blue}
let c:Color=Color.Green;

enum Color{Red=1,Green=2,Blue=4}
let c:Color=Color.Green;
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

```typescript
let getProps=(obj,key)=>{
	return obj[key];
}
```



#### 枚举详细讲解

枚举有三种类型 数字枚举、字符串枚举和异构枚举

###### 数字枚举

```typescript
enum Direction {
 Up = 1,
 Down,
 Left,
 Right
 }
//定义了一个数字枚举， Up使用初始化为 1。 其余的成员会从 1开始自动增长。 换句话说， Direction.Up的值为 1， Down为 2， Left为 3， Right为 4。
//我们还可以完全不使用初始化器：
enum Direction {
    Up,
    Down,
    Left,
    Right,
}
//Up的值为 0， Down的值为 1等等。 当我们不在乎成员的值的时候，这种自增长的行为是很有用处的，但是要注意每个枚举成员的值都是不同的。

//数字枚举可以被混入到 计算过的和常量成员（如下所示）。 简短地说，不带初始化器的枚举或者被放在第一的位置，或者被放在使用了数字常量或其它常量初始化了的枚举后面。
enum E {
    A = getSomeValue(),
    B, //“错误！”“A”不是常量，因此“B”需要初始值设定项
}
```

###### 数字枚举注意点

```typescript
enum Gender {
  Male =3,
  Female
}
// 底层用的就是数字类型
console.log(Gender.Female)
//数字枚举注意点
//1.如果是给Male赋值，那么后面的值都改变
//2.如果是给Female赋值，那么Male不改变 Female的值发生改变
//3.也可以给Male和Female分别赋值
//4.数字枚举不仅仅可以使用默认值 还可以使用常量、机算后的结果
```

###### 枚举反向映射

可以根据枚举值获取到原始值，也可以根据原始值获取到枚举值
除了创建一个以属性名做为对象成员的对象之外，数字枚举成员还具有了 *反向映射*，从枚举值到枚举名字。

```typescript
enum Gender {
  Male =3,
  Female
}
console.log(Gender.Male)
console.log(Gender[3])
```

字符串枚举

注意: 枚举反向映射 在字符串枚举中不能实现

```typescript
enum Direction {
 Up = "UP",
 Down = "DOWN",
 Left = "LEFT",
 Right = "RIGHT",
 }
//由于字符串枚举没有自增长的行为，字符串枚举可以很好的序列化。 换句话说，如果你正在调试并且必须要读一个数字枚举的运行时的值，这个值通常是很难读的 - 它并不能表达有用的信息（尽管 反向映射会有所帮助），字符串枚举允许你提供一个运行时有意义的并且可读的值，独立于枚举成员的名字。
```

###### 字符串枚举的注意点

1.如果使用字符串给前面的枚举赋值了字符串，那么后面的也必须赋值（无论是字符串还是数字都可以）
2.如果使用字符串给前面的枚举值赋值了字符串，那么后面的也必须赋值，如果不赋值，那么就使用默认值，也会被TS认为是字符串枚举
3.和数字枚举不一样，字符串枚举不能使用常量或者计算结果给枚举值赋值
4.虽然字符串枚举不能够使用常量或计算结果给枚举值赋值，但他可以使用内部的其他枚举值来赋值

###### 异构枚举

从技术的角度来说，枚举可以混合字符串和数字成员，但是似乎你并不会这么做：

```typescript
// 枚举中既包含数字又包含字符串，我们称之为异构枚举
// 注意点: 如果是是字符串枚举，那么无法通过原始值获取到枚举值
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}
```

除非你真的想要利用JavaScript运行时的行为，否则我们不建议这样做。

###### 普通枚举和常量枚举有什么区别

1.普通枚举会生成真实存在的对象
2.常量枚举不会生成真实存在的对象，而是利用枚举成员的值直接替换使用的地方

###### 枚举成员类型

每个枚举成员都带有一个值，它可以是 *常量*或 *计算出来的*。 

枚举成员使用 *常量枚举表达式*初始化。 常数枚举表达式是TypeScript表达式的子集，它可以在编译阶段求值。 当一个表达式满足下面条件之一时，它就是一个常量枚举表达式：

- 一个枚举表达式字面量（主要是字符串字面量或数字字面量）
- 一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义的）
- 带括号的常量枚举表达式
- 一元运算符 `+`, `-`, `~`其中之一应用在了常量枚举表达式
- 常量枚举表达式做为二元运算符 `+`, `-`, `*`, `/`, `%`, `<<`, `>>`, `>>>`, `&`, `|`, `^`的操作对象。 若常数枚举表达式求值后为 `NaN`或 `Infinity`，则会在编译阶段报错。

###### 联合枚举与枚举成员的类型

存在一种特殊的非计算的常量枚举成员的子集：字面量枚举成员。 字面量枚举成员是指不带有初始值的常量枚举成员，或者是值被初始化为

- 任何字符串字面量（例如： `"foo"`， `"bar"`， `"baz"`）
- 任何数字字面量（例如： `1`, `100`）
- 应用了一元 `-`符号的数字字面量（例如： `-1`, `-100`）

当所有枚举成员都拥有字面量枚举值时，它就带有了一种特殊的语义。

什么是联合枚举类型
联合类型就是将多种数据类型通过|连接起来
我们可以把枚举类型当作一个联合类型来使用

###### 运行时枚举

枚举是在运行时真正存在的对象。
枚举在编译之后是一个真实存在的对象，所以可以在运行时使用
而像接口这种只是用来做约束做静态检测的代码，编译之后是不存在的

#### 类型推论

###### 什么是自动类型推断

不用明确告诉编辑器是什么类型 编辑器就知道是什么类型

###### 根据初始值自动推断

注意：如果是先定义再初始化 那么是无法自动推断的 如果是定义的时候同时初始化 那么TS就会自动进行类型推断

```typescript
let value;
value =109; // 不能类型推断

let value = '1212';
let aaa = 12323; // 能类型推断
```

###### 根据上下文类型自动推断

```typescript
let fn = (numA: number, numB: number)=> {
  return numA + numB;
}


let res = fn(1,2);
```

#### 类型兼容性

######数据类型兼容

类型兼容性用于确定一个类型是否能赋值给其他类型
协变（Covariant）：只在同一个方向；
逆变（Contravariant）：只在相反的方向；
双向协变（Bivariant）：包括同一个方向和不同方向；
不变（Invariant）：如果类型不完全相同，则它们是不兼容的。