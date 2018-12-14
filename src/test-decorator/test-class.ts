import { ValidateDecorator } from './validate-decorator';
import config from '../config/config';

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
    })
    /***/
    f(param: number) {
    }
    /***/
    ff(): string {
        return config.get('test:test');
    }
}
