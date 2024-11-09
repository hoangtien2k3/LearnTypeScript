// 5. Parameter Decorators
// Mục đích: Ghi log hoặc xử lý tham số truyền vào.


function LogParameter(
    target: any,
    propertyKey: string,
    parameterIndex: number
) {
    console.log(
        `Parameter at index ${parameterIndex} in method "${propertyKey}" has been decorated.`
    );
}

class User {
    greet(@LogParameter message: string): void {
        console.log(message);
    }
}

const user = new User();
user.greet("Hello");

// Output:
// Parameter at index 0 in method "greet" has been decorated.
