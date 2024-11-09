// 2. Method Decorators
// Mục đích: Sửa đổi hoặc thêm logic trước/sau khi phương thức được gọi.

function LogExecution(
    _target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Method "${propertyKey}" called with arguments:`, args);
        const result = originalMethod.apply(this, args);
        console.log(`Method "${propertyKey}" returned:`, result);
        return result;
    };
}

class Calculator {
    @LogExecution
    add(a: number, b: number): number {
        return a + b;
    }
}

const calc = new Calculator();
calc.add(5, 3);

// Output:
// Method "add" called with arguments: [5, 3]
// Method "add" returned: 8
