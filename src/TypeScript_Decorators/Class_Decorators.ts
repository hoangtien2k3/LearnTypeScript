function Logger(constructor: Function) {
    console.log(`Class "${constructor.name}" has been created.`);
}

@Logger
class Person {
    constructor(public name: string) {}
}

// Output:
// Class "Person" has been created.



///
function AddBehavior<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    };
}

@AddBehavior
class Greeter {
    public property = "property";
    public hello: string;
    constructor(message: string) {
        this.hello = message;
    }
}

const instance = new Greeter("world");
console.log(instance.hello); // Output: override
console.log((instance as any).newProperty); // Output: new property

