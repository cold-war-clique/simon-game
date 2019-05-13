import randomNumber from './random-number.js';

const api = {
    storage: localStorage,

    makeUser(formData){ 
        const user = {
            name: formData.get('name'),
            level: 1,
        };
        return user;
    },
    saveUser(user){
        const json = JSON.stringify(user);
        api.storage.setItem('user', json);
    },
    getUser(){
        const json = api.storage.getItem('user');
        if(!json) return null;
        const user = JSON.parse(json);
        return user;
    },
    saveCode(code){
        const json = JSON.stringify(code);
        api.storage.setItem('code', json);
    },
    getCode(){
        const json = api.storage.getItem('code');
        if(!json) return null;
        const code = JSON.parse(json);
        return code;
    }
};

export default api;