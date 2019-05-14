import loadUser from '../services/load-user.js';
import api from '../services/api.js';
import randomNumber from '../services/random-number.js';
import playCode from './play-code.js';

const buttons = document.querySelectorAll('.button');
const submitButton = document.getElementById('submit-button');
const startButton = document.getElementById('start');

const user = api.getUser();
const code = api.getCode();

loadUser();

startButton.addEventListener('click', () => {
    console.log('starting code');
    // don't allow the user to click the start button,
    // maybe even hide it as well...
    startButton.disabled = true;
    startButton.classList.add('invisible');
    
    playCode(code, buttons);
});

submitButton.addEventListener('click', () => {
    const number = randomNumber();
    code.push(number);

});

console.log(user);

const userCode = [];

for(const button of buttons) {
    button.addEventListener('click', function() {
        const userNumber = parseInt(button.value);

        userCode.push(userNumber);


        console.log(userCode);
    });
}