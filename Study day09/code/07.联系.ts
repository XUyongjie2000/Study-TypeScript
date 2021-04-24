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
