// Enum với const
// TypeScript hỗ trợ const enums để tối ưu hóa hiệu suất.
// const enum được xử lý ngay trong quá trình biên dịch (compile-time),
// không tạo ra đối tượng thực tế trong mã JavaScript.

const enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move = Direction.Up;
console.log(move); // Output: 0 (được in sẵn trong mã biên dịch)



// example
enum Status {
    Active,
    Inactive,
    Pending
}

function getStatusMessage(status: Status): string {
    switch (status) {
        case Status.Active:
            return "The status is active.";
        case Status.Inactive:
            return "The status is inactive.";
        case Status.Pending:
            return "The status is pending.";
        default:
            return "Unknown status.";
    }
}

console.log(getStatusMessage(Status.Active)); // Output: "The status is active."
