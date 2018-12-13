import { ValidateDecorator } from "./validate-decorator";

/***/
export class TestClass {
    /***/
    constructor() {
    }
    /***/
    @ValidateDecorator((param: any) => {
        if (param % 2 === 1) {
            // throw new Error('ValidateDecorator');
        }
        console.log(`validator ${param}`);
    })
    f(param: number) {
        console.log(`from f ${param}`);
    }
}
