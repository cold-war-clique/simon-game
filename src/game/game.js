import loadUser from '../services/load-user.js';
import api from '../services/api.js';
import randomNumber from '../services/random-number.js';

const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
const button4 = document.getElementById('button-4');
const button5 = document.getElementById('button-5');
const button6 = document.getElementById('button-6');
const button7 = document.getElementById('button-7');
const button8 = document.getElementById('button-8');
const button9 = document.getElementById('button-9');
const button0 = document.getElementById('button-0');
const submitButton = document.getElementById('submit-button');



const user = api.getUser();

loadUser();




submitButton.addEventListener('click', () => {
    console.log('yooo');
    
    console.log(user);
});

// generate random number

// push random number to user.code

// play user.code array on keypad

