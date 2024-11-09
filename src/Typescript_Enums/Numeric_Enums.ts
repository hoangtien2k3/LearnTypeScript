// 1. Numeric Enums
// Numeric Enums là loại enum cơ bản nhất. Các thành viên được gán giá trị số, mặc định bắt đầu từ 0 và tăng dần.

enum Direction {
    Up,      // 0
    Down,    // 1
    Left,    // 2
    Right    // 3
}

let move: Direction = Direction.Up;
console.log(move); // Output: 0

// Lấy tên từ giá trị
console.log(Direction[0]); // Output: "Up"


// hoặc gán giá trị tuỳ chỉnh:
enum Direction {
    Up = 1,       // 1
    Down = 2,     // 2
    Left = 4,     // 4
    Right = 8     // 8
}
