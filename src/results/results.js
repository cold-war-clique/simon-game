import loadUser from '../services/load-user.js';
import api from '../services/api.js';

const tbody = document.getElementById('users-score');
const users = api.getAll();
//const user = api.getUser();
loadUser();

for(let i = 0; i < users.length; i++) {
    // const userLevel = users[i].level;
    
    // console.log(userLevel);

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
