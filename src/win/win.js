import loadUser from '../services/load-user.js';
import api from '../services/api.js';

const continueButton = document.getElementById('continue');
const resultsButton = document.getElementById('results');

loadUser();
const user = api.getUser();


continueButton.addEventListener('click', () => {
    window.location = './game.html';
});

resultsButton.addEventListener('click', () => {
    const confirmation = confirm('You won\'t be able to continue the game if you leave the page. Are you sure you want to continue.');

    if(confirmation === true){
        user.name += ' (Cheater)';
        user.win = false;
        api.saveUser(user);
        window.location = './results.html';
    }
});