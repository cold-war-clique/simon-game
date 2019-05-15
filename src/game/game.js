import loadUser from '../services/load-user.js';
import api from '../services/api.js';
import randomNumber from '../services/random-number.js';
import playCode from './play-code.js';
import compareCodes from './compare-codes.js';

const buttons = document.querySelectorAll('.button');
const startContainer = document.getElementById('start-container');
const passwordInput = document.getElementById('code-input');

const user = api.getUser();
const code = api.getCode();
const userCode = [];

loadUser();

for(let i = 0; i < buttons.length; i++) {
    const element = buttons[i];
    element.disabled = true;
}

if(user.level >= 2){
    playCode(code, buttons, passwordInput);
} else {
    const button = document.createElement('button');
    button.id = 'start';
    button.textContent = 'Start Game';
    startContainer.appendChild(button);

    const startButton = document.getElementById('start');

    startButton.addEventListener('click', () => {
        startButton.disabled = true;
        startButton.classList.add('invisible');
        
        playCode(code, buttons, passwordInput);
    
        startButton.classList.add('hide');
    });
}

console.log(code);

for(const button of buttons) {
    button.addEventListener('click', function() {
        const userNumber = parseInt(button.value);
        
        userCode.push(userNumber);
        
        let intCheck = compareCodes(code, userCode);
        if(intCheck === false){ 
            setTimeout(function() {
                window.location = './results.html';
            }, 5); // Delay for gif to play was 5000 miliseconds
        } else if(code.length === userCode.length && intCheck){
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