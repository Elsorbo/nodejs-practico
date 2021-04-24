
const { nanoid } = require("nanoid");

const auth = require("../auth");

const TABLE = "user";

module.exports = function (injectedStore){

    let store = injectedStore || require("../../../store/dummy");
    
    function list() {

        return store.list(TABLE);
    
    }
    
    function getUser(id) {

        return store.get(TABLE, id);
    
    }

    async function addUser(body) {

        const newUser = {
            name: body.name,
            age: body.age
        }

        if(body.id) { 
            newUser["id"] = body.id; }
        else {
            newUser["id"] = nanoid(); }

        if(body.password || body.username) {

            newUser["username"] = body.username;

            await auth.addUserAuth({
                id: newUser.id,
                username: newUser.username,
                password: body.password,
            });

        }

        return store.upsert(TABLE, newUser);

    }
    
    return {
        list,
        getUser,
        addUser,
    }

}
