//3. Complex Types (Kiểu dữ liệu phức tạp):
//any - Chấp nhận mọi kiểu dữ liệu. Dùng cẩn thận để tránh mất kiểm tra kiểu.
let data: any = "Hello";
data = 123; // Hợp lệ
data = true; // Hợp lệ

//unknown - Tương tự any, nhưng cần kiểm tra kiểu trước khi sử dụng.
const value: unknown = "Hello";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}

// void - Hàm không trả về giá trị.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function logMessage(message: string): void {
    console.log(message);
}

// never - Hàm không bao giờ kết thúc hoặc không trả về giá trị (thường dùng trong lỗi).
function throwError(message: string): never {
    throw new Error(message);
}

// Arrays
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Alice", "Bob"];

// Tuples - Mảng có độ dài cố định và kiểu xác định cho từng phần tử.
let person: [string, number] = ["Alice", 25];
