import api from '../services/api.js';

const userSignUp = document.getElementById('user-sign-up');

userSignUp.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(userSignUp);
    const user = api.makeUser(formData);
    
    api.makeUser(formData);

    api.saveUser(user);

    window.location = 'game.html';
});