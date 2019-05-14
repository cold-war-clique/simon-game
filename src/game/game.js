import loadUser from '../services/load-user.js';
import api from '../services/api.js';
import randomNumber from '../services/random-number.js';
import playCode from './play-code.js';
import compareCodes from './compare-codes.js';

const buttons = document.querySelectorAll('.button');
//const submitButton = document.getElementById('submit-button');
const startButton = document.getElementById('start');

const user = api.getUser();
const code = api.getCode();
const userCode = [];

loadUser();

startButton.addEventListener('click', () => {
    startButton.disabled = true;
    startButton.classList.add('invisible');
    
    playCode(code, buttons);
});

console.log(code);

for(const button of buttons) {
    button.addEventListener('click', function() {
        const userNumber = parseInt(button.value);
        
        userCode.push(userNumber);
        
        let intCheck = compareCodes(code, userCode);
        if(intCheck === false){
            console.log('lose');
            window.location = './results.html';
        } else if(code.length === userCode.length && intCheck){
            console.log('win');
            const newLevel = user.level + 1;
            user.level = newLevel;
            const number = randomNumber();
            code.push(number);
            api.saveCode(code);
            api.saveUser(user);
            location.reload();
        }
    });
}

// submitButton.addEventListener('click', () => {
    
// });

// code that happens after everything else runs
//const number = randomNumber();
//code.push(number);