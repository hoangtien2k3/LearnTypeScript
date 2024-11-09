// 7. Union và Intersection Types:
// Union Type - Một biến có thể thuộc một trong nhiều kiểu.
let id: number | string;
id = 123; // Hợp lệ
id = "ABC"; // Hợp lệ
console.log(id)

// Intersection Type
type Name = { name: string };
type Age = { age: number };
type User = Name & Age;
let user: User = { name: "Alice", age: 25 };
console.log(user)
