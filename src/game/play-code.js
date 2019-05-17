
const buttonPlay = new Audio('assets/cold-war-needed/button-play.wav');

function playCode(code, buttons, passwordInput) {
    let i = 0;
    let password = '';
    const interval = setInterval(() => {
        turnAllOff(code, buttons);

        if(i === code.length) {
            clearInterval(interval);
            donePlaying(buttons, passwordInput);
        }
        else {
            setTimeout(() => {
                const indexToPlay = code[i];

                const buttonToPlay = buttons[indexToPlay];

                buttonPlay.play();
                
                buttonToPlay.classList.add('on');
                
                password += 'x';
                passwordInput.value = password;
                
                i = i + 1;
            }, 500);

        }
        
    }, 1250);
}

function turnAllOff(code, buttons) {
    for(let i = 0; i < code.length; i++) {
        const index = code[i];
        const button = buttons[index];
        button.classList.remove('on');
    }
}

function donePlaying(buttons, passwordInput) {
    for(let i = 0; i < buttons.length; i++){
        passwordInput.value = '';
        const element = buttons[i];
        element.disabled = false;
    }
}

export default playCode;