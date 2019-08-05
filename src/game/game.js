import loadUser from '../services/load-user.js';
import api from '../services/api.js';
import randomNumber from '../services/random-number.js';
import playCode from './play-code.js';
import compareCodes from './compare-codes.js';

const buttons = document.querySelectorAll('.button');
let passwordInput = document.getElementById('code-input');
const myModal = document.getElementById('my-modal-kim');
const startModal = document.getElementById('start-modal');

const clickSound = new Audio('assets/cold-war-needed/name-letter-sound.mp3');
const loseMusic = new Audio('assets/cold-war-needed/theme-game4.mp3');
const startButtonSound = new Audio('assets/cold-war-needed/start-button.wav');
const loadGameSound = new Audio('assets/cold-war-needed/theme-game-start.mp3');
const levelUpSound = new Audio('assets/cold-war-needed/level-up.mp3');

const user = api.getUser();
const code = api.getCode();
const userCode = [];
let userCodeInput = '';

loadUser();

if(user.win === false){
    window.location = './results.html';
}

// same code is in play-code.js,
// create a shared function
for(let i = 0; i < buttons.length; i++) {
    const element = buttons[i];
    element.disabled = true;
}

if(user.level >= 2){
    playCode(code, buttons, passwordInput);
    levelUpSound.play();
} else {
    startModal.style.display = 'block';

    loadGameSound.play();

    startModal.addEventListener('click', () => {
        startModal.style.display = 'none';
        
        loadGameSound.muted = true;

        playCode(code, buttons, passwordInput);

        startButtonSound.play();
    });
}

// be consistent. above you are using traditional for loop,
// here you are using newer syntax
for(const button of buttons) {
    button.addEventListener('click', function() {
        clickSound.play();

        const userNumber = parseInt(button.value);
        userCode.push(userNumber);
        
        let numberPressed;
        if(userNumber > 8){
            numberPressed = 0;
        } else {
            numberPressed = userNumber + 1;
        }
        passwordInput.type = 'text';
        userCodeInput += numberPressed;
        passwordInput.value = userCodeInput;
        
        let intCheck = compareCodes(code, userCode);
        if(!intCheck){ 
            loseMusic.play();

            myModal.style.display = 'block';

            user.win = false;
            api.saveUser(user);
            api.saveCode(code);

            setTimeout(function() {
                window.location = './results.html';
            }, 7000);
        // do you really need the check? or just "else"?
        } else if(code.length === userCode.length && intCheck){
            const newLevel = user.level + 1;
            user.level = newLevel;
            
            const number = randomNumber();
            code.push(number);
            
            if(user.level === 20){
                api.saveCode(code);
                api.saveUser(user);

                window.location = './win.html';
            } else {
                api.saveCode(code);
                api.saveUser(user);
    
                location.reload();
            }
        }
    });
}