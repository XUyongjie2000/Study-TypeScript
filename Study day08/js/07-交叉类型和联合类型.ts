// 1.联合类型
// 格式: type1 | type2| ...
// 联合类型是多个类型中的任意一个类型

let  a:number|string|boolean; // 声明a的类型

// a = 123;
// a = 'sadfsda';
// a = true;

// a = Symbol(); // 没有该类型 所以报错了



// 2.交叉类型
// 格式: type1&type2&type...
// 交叉类型是将多个类型合并为一个类型

// 需求: 创建一个函数 用于 将两个对象 合并为一个对象 并返回

let getNewObj = <T,U>(target:T, source:U):(T&U)=>{
  // 告诉ts 我返回的res 是 T&U
  let res = {} as (T&U);

  res = Object.assign(target, source);

  return res;
}


console.log(getNewObj({name: 'zhangsan'},{age: 18}))