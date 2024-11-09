// 1. Khai báo Function
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 3)); // Output: 8


// 2. Function không trả về giá trị (void)
function logMessage(message: string): void {
    console.log(message);
}
logMessage("Hello, TypeScript!"); // Output: Hello, TypeScript!


// 3. Function Expression
const multiply = function (a: number, b: number): number {
    return a * b;
};
console.log(multiply(4, 5)); // Output: 20


// 4. Arrow Functions
const subtract = (a: number, b: number): number => a - b;
console.log(subtract(10, 6)); // Output: 4


// 5. Optional Parameters
function greet(name: string, age?: number): string {
    return age ? `Hello, ${name}. You are ${age} years old.` : `Hello, ${name}.`;
}
console.log(greet("Alice"));          // Output: Hello, Alice.
console.log(greet("Bob", 30));        // Output: Hello, Bob. You are 30 years old.


// 6. Default Parameters
function calculatePrice(price: number, tax: number = 0.1): number {
    return price + price * tax;
}
console.log(calculatePrice(100));      // Output: 110
console.log(calculatePrice(100, 0.2)); // Output: 120


// 7. Rest Parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3));    // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22


// 8. Overloads (Chồng hàm)
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
    return a + b;
}
console.log(combine(1, 2));       // Output: 3
console.log(combine("Hello, ", "TypeScript")); // Output: Hello, TypeScript


// 9. Anonymous Functions
setTimeout(function () {
    console.log("Anonymous function executed.");
}, 1000);


// 10. Typed Functions
type MathOperation = (x: number, y: number) => number;
const divide: MathOperation = (x, y) => x / y;
console.log(divide(10, 2)); // Output: 5


// 11. this trong Function
class Counter {
    count = 0;

    increment = (): void => {
        this.count++;
    };
}
const counter = new Counter();
counter.increment();
console.log(counter.count); // Output: 1


// 12. Generic Functions
function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<number>(5));   // Output: 5
console.log(identity<string>("Hi")); // Output: Hi
