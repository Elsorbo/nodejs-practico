
const bcrypt = require("bcrypt");

const authService = require("../../../services/auth/auth-service");

const TABLE = "auth";

module.exports = function (injectedStore) {

    let store = injectedStore || require("../../../store/dummy");

    async function login(username, password) {

        const data = await store.authQuery(TABLE, {username});

        return bcrypt.compare(password, data["password"])
            .then( (isEquals) => {
            
                if(isEquals) {
                    return authService.generateToken(data) }
                else { 
                    throw new Error("Credenciales incorrectas"); }
            
            });

    }

    async function addUserAuth(data) {

        const authData = {
            id: data.id,
        }

        if(data.username) { 
            authData["username"] = data.username; }
        if(data.password) { 
            authData["password"] = await bcrypt.hash(data.password, 12); }
        
        return store.upsert(TABLE, authData);

    }

    return {
        addUserAuth,
        login,
    }

};
