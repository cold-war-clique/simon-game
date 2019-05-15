import api from '../services/api.js';
import makeCode from '../services/make-code.js';

const userSignUp = document.getElementById('user-sign-up');

userSignUp.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(userSignUp);
    const user = api.makeUser(formData);
    const code = makeCode();
    
    api.makeUser(formData);

    api.saveNewUser(user);
    api.saveCode(code);
    console.log(code);

    window.location = 'game.html';
});