// TypeScript Arrays


// Cách 1: Sử dụng dấu ngoặc vuông ([])
let arr: number[] = [1, 2, 3];
let names: string[] = ["Alice", "Bob"];


// Cách 2: Sử dụng Array<Type>
let numbers: Array<number> = [1, 2, 3, 4];
let strings: Array<string> = ["apple", "banana", "cherry"];


// Union Types: - Mảng với kiểu dữ liệu khác nhau (Mixed Types)
let mixedArray: (number | string)[] = [1, "apple", 2, "banana"];

// Tuple
let person: [string, number] = ["Alice", 25]; // Tuple với 2 phần tử: string và number

// Kiểu mảng phức tạp
type Person = {
    name: string;
    age: number;
};

let people: Person[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];


// sử dụng mảng với tuple:
let data: [string, number][] = [
    ["Alice", 25],
    ["Bob", 30]
];


// Mảng trong TypeScript với Generics
function logItems<T>(items: T[]): void {
    items.forEach(item => console.log(item));
}

logItems([1, 2, 3]);           // Log mảng số
logItems(["apple", "banana"]); // Log mảng chuỗi

