// 通过[]索引类型访问操作符, 我们就能得到某个索引的类型
// interface Person {
//     name: string;
// }

// 声明一个类型 这个类型我不知道
// 类型是通过 Person['name]得到的
// type s =  Person['name'];

// let w:s ='zs';


// 应用场景
// 需求: 获取指定对象, 部分属性的值, 放到数组中返回
// 通过传入一个 对象键的数组,返回键对应的值的数组
// T[K] T代表obj K obj[name] = string
let getValues= <T,K extends keyof T>(obj:T, keys:K[]):T[K][]=>{
    // 我告诉ts了这个数组是
    // let arr = [] as (T[K][]);
    let arr:(T[K][]) = [];
    keys.forEach(key => {
        arr.push(obj[key]);
    });

    return arr;
}

let obj = {
    name: 'zs',
    age: 18,
    married: true
}
let res = getValues(obj,['name','age','married']);
console.log(res);

// getValues(obj, ['name','age'])


// let obj = {
//     name: 'zs',
//     age: 18,
//     married: true
// }

// 把name的值取出来放到数组中
// age
// let arr:(string|number|boolean)[] =['zs', 18,true]

// 索引访问操作符注意点
// 不会返回null/undefined/never类型


