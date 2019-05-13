import api from './api.js';

function loadUser() {
    const name = document.getElementById('user-name');
    const level = document.getElementById('level');

    const user = api.getUser();

    if(!user) {
        window.location = './';
    }

    name.textContent = user.name;
    level.textContent = user.level;
}

export default loadUser;