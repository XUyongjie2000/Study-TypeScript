//类型兼容性用于确定一个类型是否能赋值给其他类型。
//参数个数
// let fn1 = (x: number, y: number): void => { };
// let fn2 = (x: number): void => { }
// let fn3 = (x: string, y: string): void => { }

// fn1 = fn2 // 参数多的可以接收参数少的函数的赋值
// fn2 = fn1 // 参数少的不能接受参数多的


//参数类型
// let fn1 = (x: number, y: number): void => { };
// let fn2 = (x: number): void => { }
// let fn3 = (x: string, y: string): void => { }

// fn3 = fn1 //参数类型不同 不可以互相赋值
// fn1 = fn3


//返回值类型
// let fn1 = (x: number, y: number): number => 123;
// let fn2 = (x: number): number => 456
// let fn3 = (x: string, y: string): string => "nihao"

// fn1 = fn2;
// fn1 = fn3  // 返回值类型必须一摸一样 不一样就类型不兼容

// //函数双向协变
// //参数的双向协变
// //或：要么是number 要么是string
// let fn1 = (x: (number | string)): void => { }
// //只有一个类型就是number
// let fn2 = (y: number): void => { }

//fn1 = fn2
// fn2 = fn1

//返回值的双向协变
// let fn1 = (x: boolean): (number | string) => x ? 123 : 'abc'
// let fn2 = (x: boolean): number => 456
//fn2 = fn1 //单一类型不能赋值给联合类型
//fn2 = fn1//联合类型不能赋值给单一类型

//函数重载
//重写 相当于重新实现
//重载就是根据参数的类型不同 个数不同 能自动调用不同的函数
// function add(x: number, y: number): void;
// function add(x: string, y: string): void;

// function add(x: any, y: any) {
//     console.log(x, y);

// }

// add('aaa', 'bbbb')
// add(123, 456)