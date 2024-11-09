// 3. Heterogeneous Enums (Enum hỗn hợp)
// Enums hỗn hợp là sự kết hợp giữa Numeric Enums và String Enums.

enum Mixed {
    No = 0,         // Numeric
    Yes = "YES"     // String
}

console.log(Mixed.No);  // Output: 0
console.log(Mixed.Yes); // Output: "YES"

