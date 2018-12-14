/***/
export function ValidateDecorator(validator: Function): Function {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        return {
            value: function (...args: any[]) {
                validator(args);
                return descriptor.value.apply(this, args);
            }
        };
    }
}
