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

submitButton.addEventListener('click', () => {
    const number = randomNumber();
    code.push(number);

});

console.log(user);


startButton.addEventListener('click', () => {
    console.log('starting code');
    // don't allow the user to click the start button,
    // maybe even hide it as well...
    startButton.disabled = true;
    startButton.classList.add('invisible');

    playCode(code, buttons);
});



// generate random number

// push random number to user.code

// play user.code array on keypad

