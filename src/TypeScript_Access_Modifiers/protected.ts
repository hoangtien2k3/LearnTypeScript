// 3. protected
// Các thuộc tính hoặc phương thức được đánh dấu protected chỉ có thể truy cậ
// 1. Bên trong class nơi chúng được định nghĩa.
// 2. Bên trong các class kế thừa từ class đó.

class Person {
    protected name: string; // Truy cập được trong class và class con

    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    private position: string;

    constructor(name: string, position: string) {
        super(name);
        this.position = position;
    }

    public showDetails(): void {
        console.log(`I am ${this.name}, working as a ${this.position}.`);
    }
}

const emp = new Employee("Alice", "Developer");
emp.showDetails();        // Hợp lệ
// console.log(emp.name);  // Lỗi: Property 'name' is protected
