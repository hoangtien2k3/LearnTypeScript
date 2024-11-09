// 2. private
// Các thuộc tính hoặc phương thức được đánh dấu private chỉ có thể truy
// cập bên trong class nơi chúng được định nghĩa.
// Không thể truy cập từ bên ngoài class hoặc từ các class con (kế thừa).

class Person {
    private age: number; // Chỉ truy cập bên trong class

    constructor(age: number) {
        this.age = age;
    }

    private getAge(): number { // Phương thức chỉ có thể gọi bên trong class
        return this.age;
    }

    public showAge(): void {
        console.log(`I am ${this.getAge()} years old.`);
    }
}

const person = new Person(25);
person.showAge();         // Hợp lệ, gọi phương thức public
// console.log(person.age); // Lỗi: Property 'age' is private
// person.getAge();         // Lỗi: Method 'getAge' is private

