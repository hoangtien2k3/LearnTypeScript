// 3. Accessor Decorators
// Mục đích: Áp dụng cho getter hoặc setter để thay đổi hành vi truy cập hoặc ghi log.

function LogAccessor(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalGetter = descriptor.get;

    descriptor.get = function () {
        console.log(`Getter for "${propertyKey}" called.`);
        return originalGetter?.apply(this);
    };
}

class Rectangle {
    private _width: number = 0;

    @LogAccessor
    get width() {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }
}

const rect = new Rectangle();
rect.width = 10;
console.log(rect.width);

// Output:
// Getter for "width" called.
// 10
