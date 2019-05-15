
function playCode(code, buttons, passwordInput) {
    // keep track of what index in the array is being "played"
    let i = 0;
    let password = '';
    const interval = setInterval(() => {
        // turn off all buttons
        turnAllOff(code, buttons);

        // check if we have reached the end of the code
        if(i === code.length) {
            // stop our interval timer
            clearInterval(interval);
            // call the next step
            donePlaying(buttons, passwordInput);
        }
        else {
            // create a slight "pause" between button plays,
            // otherwise hard to detect two of same button:
            setTimeout(() => {
                // get the index of the next button
                //i = i - 1;
                //let x = i - 1;
                const indexToPlay = code[i];

                // get the right DOM node based on the button to play
                const buttonToPlay = buttons[indexToPlay];
                // turn the button "on" by adding css class
                buttonToPlay.classList.add('on');
                
                password += 'x';
                console.log(password);
                passwordInput.value = password;
                // increment the index for next interval
                i = i + 1;
            }, 300); // this controls the pause, 500ms

        }
        
    }, 750); // interval minus pause determines length of button, 750ms in this case //was 1250 miliseconds
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
    // console.log('code has been played, time to do the next thing...');
}

export default playCode;