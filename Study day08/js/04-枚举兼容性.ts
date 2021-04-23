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


class User {
    public nickname: string | undefined
    public group: number = 20
}
class Log {
    public count: number = 10
    public keyword: string | undefined
}
function typeGuard(arg: User | Log): any {
    if (arg instanceof User) {
        return arg.group
    }
    if (arg instanceof Log) {
        return arg.count
    }
}
let user = new User();
console.log(typeGuard(user))  // 输出结果20
