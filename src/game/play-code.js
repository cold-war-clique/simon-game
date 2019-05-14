
function playCode(code, buttons) {
    // keep track of what index in the array is being "played"
    let i = 0;

    const interval = setInterval(() => {
        // turn off all buttons
        turnAllOff(code, buttons);

        // check if we have reached the end of the code
        if(i === code.length) {
            // stop our interval timer
            clearInterval(interval);
            // call the next step
            donePlaying(buttons);
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
    
                // increment the index for next interval
                i = i + 1;
            }, 500); // this controls the pause, 500ms

        }
        
    }, 1250); // interval minus pause determines length of button, 750ms in this case
}

function turnAllOff(code, buttons) {
    for(let i = 0; i < code.length; i++) {
        const index = code[i];
        const button = buttons[index];
        button.classList.remove('on');
    }
}

function donePlaying(buttons) {
    for(let i = 0; i < buttons.length; i++){
        const element = buttons[i];
        //element.classList.add('disabled');
        element.disabled = false;
    }
    // console.log('code has been played, time to do the next thing...');
}

export default playCode;