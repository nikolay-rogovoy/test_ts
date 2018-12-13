import { TestClass } from "./test-decorator/test-class";

(function main(){
    console.log('start');

    let cl = new TestClass();
    cl.f(12);
    cl.f(21);

    console.log('end');
})()
