import api from '../services/api.js';
import makeCode from '../services/make-code.js';

const userSignUp = document.getElementById('user-sign-up');
const indexStartSound = new Audio('assets/cold-war-needed/index-page-start.wav');
const keyPressSound = new Audio('assets/cold-war-needed/single-typing.wav');

window.addEventListener('load', () => {
    window.setTimeout(() => {
        document.querySelector('.typing').classList.remove('typing');
    }, 750);
});

document.addEventListener('keypress', function(){
    keyPressSound.play();
});
userSignUp.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(userSignUp);
    const user = api.makeUser(formData);
    const code = makeCode();
    
    api.makeUser(formData);

    api.saveNewUser(user);
    api.saveCode(code);

    indexStartSound.play();

    setTimeout(function() {
        window.location = 'game.html';
    }, 750);

});