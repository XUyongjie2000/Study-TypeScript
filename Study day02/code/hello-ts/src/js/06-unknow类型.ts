// 1.unknow类型和any类型一样，同样都是顶级类型
// unknow 代表未知类型
let a:unknown;

a = 5;
a = 'yes';
a = true;

// true在ts中是什么类型的数据
console.log(a)

// unknown 类型只能被赋值给 any 类型和 unknown 类型本身


// let c:boolean = a;

// let d:unknown = a;

// let f:any = a;