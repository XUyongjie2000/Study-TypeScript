// 枚举兼容性

// 数字枚举与数值兼容

// enum Gender {
//   Male,
//   Female
// }

// let value = Gender.Male;

// value = 0;


// 数字枚举与数字枚举不兼容

// enum Gender {
//   Male,
//   Female
// }

// enum Animal {
//   Cat,
//   Dog
// }

// let a = Gender;

// let b = Animal;

// a = b;
// b = a;

// Gender = Animal

// Animal = Gender


// 字符串枚举与字符串不兼容
// const enum Gender {
//   Male ='aaa',
//   Female='bbb'
// }



// // 给单纯的字符串赋值
// let str = "adfsadf";
// str = Gender.Female;


// Gender.Female = str;