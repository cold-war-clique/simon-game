import compareCodes from '../src/game/compare-codes.js';

const test = QUnit.test;

QUnit.module('make user');

test('compare userCode to code and return true if code is the same', (assert) => {
    // arrange
    const expected = true;
    const code = [3, 5, 6];
    const userCode = [3, 5, 6];
    
    // act
    const result = compareCodes(code, userCode);

    // assert
    assert.deepEqual(result, expected);
});

test('compare userCode to code and return false if code is not the same', (assert) => {
    // arrange
    const expected = false;
    const code = [3, 4, 7];
    const userCode = [3, 4, 5];

    // act
    const result = compareCodes(code, userCode);

    // assert
    assert.deepEqual(result, expected);
});