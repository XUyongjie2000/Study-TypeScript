//Object.defineProperty(obj,prop,descriptor)
//作用：可以用来精确添加或修改对象的属性，只需要在descriptor对象中将属性特性描述清楚

//1.数据描述符 它拥有四个属性配置
//1.1 configurable：数据是否可删除 可配置
//1.2 enumerable：属性是否可枚举
//1.3 value：属性值，默认是否可枚举
//1.4 writable:属性是否可读写 true代表可读可写 false不可读写 

let obj = { name: 'zs', age: 18 }

Object.defineProperty(obj, 'age', {
    writable: true
});

obj.age = 9;
console.log(obj);


//2.存取描述符 他同样拥有四个属性选项
//2.1 configurable ：数据是否可删除 可配置
//2.2 enumerable：属性是否可枚举
//2.3 get:一个给属性提供getter的方法，如果没有getter则为undefined
//2.4 set：一个给属性提供setter的方法 如果没有setter则为undefined

//需要注意的是：数据描述符的value ，writable和存取描述符中的get，set属性不能同时存在 否则会抛出异常
