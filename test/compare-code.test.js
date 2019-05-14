const test = QUnit.test;

QUnit.module('make user');

test('compare userCode to code and return true if code is the same', (assert) => {
    // arrange
    const expected = true;
    const code = [3, 5, 6];
    
    // act
    const user = 'Expected';

    // assert
    assert.deepEqual(user, expected);
});

test('compare userCode to code and return false if code is not the same', (assert) => {
    // arrange
    const expected = false;

    // act
    const user = 'Expected';

    // assert
    assert.deepEqual(user, expected);
});