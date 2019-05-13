import makeCode from '../src/services/make-code.js';

const test = QUnit.test;

QUnit.module('make code');

test('make code array from random number', (assert) => {
    // arrange
    const number = [1, 3];

    // act
    const result = makeCode(); 

    // assert
    assert.equal(number.length, result.length);
});