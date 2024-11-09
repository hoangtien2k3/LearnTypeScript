// Generics (Kiểu dữ liệu tổng quát):

function identity<T>(value: T): T {
    return value;
}
let num = identity<number>(10);
let str = identity<string>("Hello");
