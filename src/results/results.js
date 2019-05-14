import loadUser from '../services/load-user.js';
import api from '../services/api.js';


const user = api.getUser;
loadUser(user);