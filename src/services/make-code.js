import randomNumber from './random-number.js';

function makeCode(){
    let number = randomNumber();
    const code = [number];
    number = randomNumber();
    code.push(number);
    return code;
}

export default makeCode;