

const api = {
    storage: localStorage,

    makeUser(formData) {
        const user = {
            name: formData.get('name'),
            level: 1
        };
        return user;
    },
    getUser(){
        const json = api.storage.getItem('user');
        if(!json) return null;
        const user = JSON.parse(json);
        return user;

    },
    saveUser(user){
        const json = JSON.stringify(user);
        api.storage.setItem('user', json);
    }
};

export default api;