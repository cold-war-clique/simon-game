import loadUser from '../services/load-user.js';
import api from '../services/api.js';

const cheatButton = document.getElementById('cheat');
const tbody = document.getElementById('users-score');
const users = api.getAll();
const user = api.getUser();

loadUser();

users.sort((a, b) => b.level - a.level);

let length;
if(users.length < 10){
    length = users.length;
} else {
    length = 10;
}

for(let i = 0; i < length; i++) {

    const user = users[i];
    
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = user.name;
    tr.appendChild(nameCell);
    
    const levelCell = document.createElement('td');
    levelCell.textContent = user.level;
    tr.appendChild(levelCell);

    tbody.appendChild(tr);
}

cheatButton.addEventListener(('click'), () => {
    user.level = 18;
    user.win = true;
    api.saveUser(user);

    window.location = './game.html';
});