import loadUser from '../services/load-user.js';
import api from '../services/api.js';
import randomNumber from './random-number.js';

api.getUser();

loadUser();

const number = randomNumber();
console.log(number);
// generate random number

// push random number to user.code

// play user.code array on keypad

