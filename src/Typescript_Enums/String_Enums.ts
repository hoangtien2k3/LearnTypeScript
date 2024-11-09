// 2. String Enums
// Trong String Enums, mỗi thành viên được gán một giá trị chuỗi thay vì số.

enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

let favoriteColor: Color = Color.Red;
console.log(favoriteColor); // Output: "RED"
