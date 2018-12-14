import { TestClass } from "./test-decorator/test-class";

(function main(){
    console.log('start');

    let cl = new TestClass();
    console.log(cl.ff());

    console.log('end');
})()
