import loadUser from '../services/load-user.js';
import api from '../services/api.js';

const tbody = document.getElementById('users-score');
const users = api.getAll();
loadUser();

users.sort((a, b) => b.level - a.level);

for(let i = 0; i < 10; i++) {

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
