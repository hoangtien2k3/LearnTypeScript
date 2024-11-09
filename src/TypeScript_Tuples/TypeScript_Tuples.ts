// Khai báo Tuples
let person: [string, number, boolean];
person = ["Alice", 25, true]; // Hợp lệ

person[1] = 30;   // Hợp lệ
person[2] = false; // Hợp lệ

// person[0] = 123;   // Lỗi: Type 'number' is not assignable to type 'string'.



// Tuple với Rest Elements
// TypeScript hỗ trợ Rest Elements trong Tuple để làm việc với số lượng phần tử không cố định:
let names: [string, ...string[]];
names = ["Alice"];                     // Hợp lệ
names = ["Alice", "Bob", "Charlie"];   // Hợp lệ
console.log(names)



// Tuple function
function getUser(): [string, number] {
    return ["Alice", 25];
}

let [name, age] = getUser();
console.log(name); // "Alice"
console.log(age);  // 25

let readonlyTuple: readonly [string, number] = ["Alice", 25];
readonlyTuple[0] = "Bob"; // Lỗi: Cannot assign to '0' because it is a read-only property.
