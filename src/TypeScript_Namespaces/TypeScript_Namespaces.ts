// TypeScript Namespaces
// Namespaces trong TypeScript là một cách để tổ chức mã thành các khối logic,
// giúp tránh xung đột tên (name collision) khi làm việc với nhiều lớp, hàm, hoặc biến trong cùng một ứng dụng.

// Tại sao cần Namespaces?
// Namespaces rất hữu ích khi:
// Bạn có một dự án lớn với nhiều thành phần cần được nhóm lại để tránh xung đột tên.
// Bạn muốn chia sẻ mã nhưng vẫn cần bảo vệ một số chi tiết nội bộ khỏi không gian toàn cục.

// 2. Cách khai báo và sử dụng Namespaces
namespace Utils {
    export function greet(name: string): void {
        console.log(`Hello, ${name}!`);
    }

    export const pi = 3.14; // Export để sử dụng bên ngoài namespace
}

Utils.greet("Alice"); // Output: Hello, Alice!
console.log(Utils.pi); // Output: 3.14



// 3. Namespace với Classes và Interfaces
namespace Shapes {
    export interface Shape {
        draw(): void;
    }

    export class Circle implements Shape {
        constructor(private radius: number) {}

        draw(): void {
            console.log(`Drawing a circle with radius: ${this.radius}`);
        }
    }
}
