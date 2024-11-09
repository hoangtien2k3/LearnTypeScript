// Khái niem:

//1. null - cố tình gán cho một biến để chỉ rằng biến đó không có giá trị.
let value: null = null; // Gán null một cách rõ ràng


//2. undefined - Biến chưa được khởi tạo hay Hàm không trả về giá trị rõ ràng.
let value: undefined; // Không gán gì, mặc định là undefined
function doSomething() {} // Hàm không có return sẽ trả về undefined



// 4. So sánh bằng toán tử:
// == (So sánh lỏng lẻo):
// Khi dùng ==, null và undefined được coi là bằng nhau vì cả hai đều là "giá trị rỗng".
console.log(null == undefined); // true

// === (So sánh chặt chẽ):
// Khi dùng ===, chúng khác nhau vì có kiểu dữ liệu khác nhau.
console.log(null === undefined); // false
