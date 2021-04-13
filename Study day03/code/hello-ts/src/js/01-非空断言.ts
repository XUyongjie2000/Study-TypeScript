// 在上下文中当类型检查器无法断定类型时，一个新的后缀表达式操作符 ! 可以用于断言操作对象是非 null 和非 undefined 类型。具体而言，x! 将从 x 值域中排除 null 和 undefined 。

// 声明了一个函数 notNull 参数是str 数据类型是string 或者 undefined 或者是null
// function notNull(str: object | undefined | null){
//   // 在某种场景下 我要初始化对象
//   // null代表空 但是也代表意料之中一般用于初始化一个对象
//   // undefined 代表空 未定义 代表的是意料之外
//   let str1 = null; // 初始化str1

//   str1 = str!;
//   console.log(str1);

//   // 场景: 当我调用函数的时候 初始化一个对象 
//   // 把函数的参数的值赋值给函数中的变量
// }

// notNull({a:1,b:2})


// function notNull(str: string | undefined | null){
//   // 在某种场景下 我要初始化对象
//   // null代表空 但是也代表意料之中一般用于初始化一个对象
//   // undefined 代表空 未定义 代表的是意料之外
//   // let str1 = null; // 初始化str1
//   // let str1:string = "123";
//   let str1:string = str!;
//   console.log(str1);
//   // console.log(str)
//   // 场景: 当我调用函数的时候 初始化一个对象 
//   // 把函数的参数的值赋值给函数中的变量
// }

// notNull()



// function notNull(str: string | undefined | null){
 
//   let str1:string = str!;
//   console.log(str1);

// }


// notNull()