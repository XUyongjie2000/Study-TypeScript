// 有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。
// 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
// 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。
// 类型断言好比其他语言里的类型转换，但是不进行特殊的数据检查和解构。
// 它没有运行时的影响，只是在编译阶段起作用

// let str:any ="asdfsdaf";
// let num:any = 12231324;
// 进行数据类型转换
// console.log(str.length)
// let str1 = (str as unknown);

// console.log(typeof num);
// let str2 = (num as string);
// console.log(typeof str2);

// unknow 只能赋值给any和本身
// let c:string = str1;
// let d:unknown = str1;


// 注意点: 一般都是把any转换为其他类型
// ts已经有一个类型了，但是你心里明白 他是你心中所想的那个类型
// toString()
// String()


// any
// 

// let asad = function(c:number):void{

//   let d:number = (c as number);
  
//   console.log(d+5);
// }

// asad('2');



