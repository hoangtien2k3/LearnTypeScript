//4. Object Types (Kiểu dữ liệu đối tượng):
// Object Types
let user: { name: string; age: number } = {
    name: "Alice",
    age: 25,
};
console.log(user);

//Interfaces - Định nghĩa cấu trúc của đối tượng.
interface User {
    name: string;
    age: number;
}
let admin: User = { name: "Bob", age: 30 };
console.log(admin)

// Type Alias - Tạo kiểu dữ liệu mới bằng từ khóa type.
type Point = { x: number; y: number };
let position: Point = { x: 10, y: 20 };
console.log(position)

// Enums - Tập hợp các giá trị cố định được gán tên.
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}
let move: Direction = Direction.Up;
console.log(move);
