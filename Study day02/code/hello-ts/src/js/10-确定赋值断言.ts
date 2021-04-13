// 确定赋值断言
// 明确的告诉ts，我后面会给某个值赋值的

// 1.ts 还是js

// ts是静态检查还是动态检查

// 编译前检查

let xyz!: number;
initialize();
console.log(2 * xyz); // Error

function initialize() {
  xyz = 10;
}

// let x:number;

// x = "4"


// ts最终是js
// ts从来就没有执行过
// ts主要是做1.运行前的类型检查 2.代码提示