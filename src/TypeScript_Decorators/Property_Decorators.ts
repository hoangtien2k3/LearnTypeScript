// 4. Property Decorators
// Mục đích: Sử dụng để ghi log hoặc thêm metadata vào thuộc tính.

function LogProperty(target: any, propertyKey: string) {
    console.log(`Property "${propertyKey}" has been accessed.`);
}

class Car {
    @LogProperty
    model: string;

    constructor(model: string) {
        this.model = model;
    }
}

const car = new Car("Tesla");
// Output:
// Property "model" has been accessed.
