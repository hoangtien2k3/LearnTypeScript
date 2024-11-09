// TypeScript Ambient Declarations

// Cách sử dụng Ambient Declarations
// Từ khóa declare
// Sử dụng để khai báo các thực thể bên ngoài (hàm, biến, module, class, v.v.).
// Không có logic hoặc thực thi thực tế trong các khai báo này.

// syntax:
declare module module_name{
}


// Ambient Variable Declaration
declare var jQuery: (selector: string) => any;
jQuery("#id"); // Không bị lỗi kiểu, TypeScript hiểu `jQuery` là một hàm nhận tham số `string`.


// Ambient Function Declaration
declare function alert(message: string): void;
alert("Hello, TypeScript!"); // Không bị lỗi kiểu.


// Ambient Class Declaration
declare class Person {
    constructor(name: string);
    name: string;
    greet(): string;
}
const person = new Person("John");
console.log(person.name);    // "John"
console.log(person.greet()); // Không bị lỗi kiểu.


// Ambient Module Declaration
declare module "lodash" {
    export function chunk<T>(array: T[], size?: number): T[][];
}

import { chunk } from "lodash";

const result = chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
console.log(result);




