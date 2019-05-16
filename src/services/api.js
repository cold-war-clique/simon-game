
const api = {
    storage: localStorage,

    key: 'users',
    makeUser(formData){ 
        const user = {
            name: formData.get('name'),
            level: 1,
            win: true
        };
        return user;
    },
    saveUser(user){
        const users = api.getAll();
        users[0] = user;
        const json = JSON.stringify(users);
        api.storage.setItem(api.key, json);
    },
    saveNewUser(user){
        const users = api.getAll();
        users.unshift(user);
        const json = JSON.stringify(users);
        api.storage.setItem(api.key, json);
    },
    getUser(){
        const users = api.getAll();
        return users[0];
    },
    getAll() {
        const json = localStorage.getItem(api.key);
        let users = JSON.parse(json);
        if(!users) {
            users = [];
        }
        return users;
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