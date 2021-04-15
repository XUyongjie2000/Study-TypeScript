//1.创建函数的方式
//1.1 函数关键字
//1.2 函数表达式
//1.3 箭头函数
//1.4 构造函数创造函数 let c = new Function("函数形参","函数体")


//2.函数的可选参数
// 在形参的后面 添加一个问号  就代表该参数可选
// let fn=function(x:number,y?:number){
//  if(y){
//      return x+y;

//  }else{
//      return x
//  }
// }
// //ts中如果没有声明可选 那么必须传参  不传参报错
// let result :number =fn(1)
// console.log(result);


//3.参数的默认值
//和es6是一样的
let fn=function(y:number,x:number =3){
 if(y) {
     return x+y;
 
 }else{
     return x
 }
}
//ts中如果没有声明可选 那么必须传参  不传参报错
let result :number =fn(6)
console.log(result);
