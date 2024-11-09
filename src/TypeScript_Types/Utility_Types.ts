// 5. Utility Types (Các kiểu tiện ích):
//Partial - Chuyển tất cả thuộc tính của kiểu thành tùy chọn.
interface User {
    name: string;
    age: number;
}
let partialUser: Partial<User> = { name: "Alice" }; // age không cần thiết
console.log(partialUser);

// Readonly - Chuyển tất cả thuộc tính thành chỉ đọc.
let readonlyUser: Readonly<User> = { name: "Alice", age: 25 };
// readonlyUser.age = 30; // Lỗi

// Record - Tạo một đối tượng từ các khóa và kiểu giá trị.
let roles: Record<string, number> = { admin: 1, user: 2 };


// Pick và Omit
// Pick: Chọn một tập hợp thuộc tính từ kiểu.
// Omit: Loại bỏ một tập hợp thuộc tính từ kiểu.
type UserName = Pick<User, "name">; // { name: string }
type UserAge = Omit<User, "name">; // { age: number }

