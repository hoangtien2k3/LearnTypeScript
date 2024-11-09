// Khi nào sử dụng Type Assertion?
// Làm việc với kiểu any hoặc unknown:

const someValue: unknown = "Hello, TypeScript!";
const strLength: number = (someValue as string).length;

console.log(strLength)
console.log(typeof strLength)


// ex
function getValue(): any {
    return "TypeScript is awesome!";
}

let value = getValue();
// TypeScript không biết kiểu trả về chính xác là gì, mặc định là 'any'.
// Sử dụng Type Assertion để xác định kiểu cụ thể:
let length = (value as string).length;

console.log(length); // Output: 22
console.log(typeof length);
