import api from '../src/services/api.js';

const test = QUnit.test;

QUnit.module('make user');

test('make user from form data', (assert) => {
    // arrange
    const formData = new FormData();

    formData.set('name', 'Jeffrey');

    // act
    const user = api.makeUser(formData);

    // assert
    assert.deepEqual(user, {
        name: 'Jeffrey',
        level: 1
    });
});


test('saveUser, is saving the user and returns on getUser', (assert) => {
    // arrange
    const user = {
        name: 'ben',
        level: 1
    };

    // act
    api.saveUser(user);
    const result = api.getUser();

    // assert
    assert.deepEqual(user, result);
});