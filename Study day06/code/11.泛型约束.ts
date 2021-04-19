let getArray = <T>(value: T, items: number): T[] => {
    return new Array(items).fill(value);
}

// let arr = getArray<string>("abc", 5);
let arr = getArray<number>(3, 4)
//let res =arr.map(item=>item.length)