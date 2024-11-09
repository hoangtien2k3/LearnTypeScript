// Phạm vi truy cập
/**
 * var:
 *      + Phạm vi hàm (Function scope)
 *      + giá trị ban đầu là undefined
 *      + Có thể khai báo lại trong cùng phạm vi
 *      + Có thể thay đổi giá trị
 *
 * let:
 *      + Phạm vi khối mã (Block scope)
 *      + truy cập trước khi gán sẽ báo lỗi ReferenceError
 *      + Không thể khai báo lại trong cùng phạm vi
 *      + Có thể thay đổi giá trị
 *
 * const:
 *      + Phạm vi khối mã (Block scope)
 *      + truy cập trước khi gán sẽ báo lỗi ReferenceError
 *      + Không thể khai báo lại trong cùng phạm vi
 *      + Không thể thay đổi giá trị sau khi gán
 *
 * */

function addNumbers(a: string, b: number): string {
    return a + b;
}

const sum = addNumbers("JavaTpoint", 25);
console.log('Sum of the numbers is: ' + sum);

// KHÁI NIỆM LIÊN QUAN TỚI VIỆC KHAI BÁO:
//Global Variables (Biến toàn cục):
// không dùng từ khóa nào (var, let, const), biến sẽ tự động trở thành biến toàn cục (global variable).
// function test() {
//     x = 10; // Không khai báo từ khóa -> trở thành biến toàn cục
// }
// test();
// console.log(x); // 10


// Immutable Objects (Đối tượng bất biến):
const obj = { name: "Alice" };
obj.name = "Bob"; // OK
console.log(obj); // { name: "Bob" }




// Các loại khai báo giá trị khác:
// Default Parameters (Tham số mặc định trong hàm):
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // Hello, Guest!
console.log(greet("Alice")); // Hello, Alice!




// Biến trong vòng lặp:
// Dùng var trong vòng lặp có thể dẫn đến lỗi vì biến không có phạm vi khối (block scope):
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000); // In ra: 3, 3, 3
// }


