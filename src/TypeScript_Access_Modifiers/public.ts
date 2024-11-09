// 1. public (mặc định)
// Các thuộc tính hoặc phương thức được đánh dấu public có thể được truy cập ở bất kỳ đâu:
// bên trong class, các class con (kế thừa), và cả bên ngoài class.
class Person {
    public name: string; // Public (mặc định)

    constructor(name: string) {
        this.name = name;
    }

    public greet(): void {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

const person = new Person("Tien");
console.log(person.name);       // Hợp lệ, truy cập được
person.greet();                         // Hợp lệ, truy cập được
