// Reference mocha-typescript's global definitions:
/// <reference path="../../node_modules/mocha-typescript/globals.d.ts" />
// import * as chaiStatic from 'chai';
import { assert } from 'chai';
import { suite, test, timeout } from 'mocha-typescript';
import { TestClass } from '../test-decorator/test-class';
// var chai = <any>chaiStatic;

/***/
@suite(timeout(2000))
class TestTest {
    /***/
    static before(done) {
        done();
    }
    /***/
    @test 'Test'(done) {
        let testClass = new TestClass();
        let val = testClass.ff();
        assert.equal(val, 'test', 'test ok');
        done();
    }
}
