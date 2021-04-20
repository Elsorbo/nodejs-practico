
const TABLE = "user";

module.exports = function (injectedStore){

    let store = injectedStore || require("../../../store/dummy");
    
    function list() {

        return store.list(TABLE);
    
    }
    
    function getUser(id) {

        return store.get(TABLE, id);
    
    }

    function addUser(body) {

        const newUser = {
            name: body.name,
            age: body.age
        }

        if(body.id) { 
            newUser["id"] = body.id; }

        return store.upsert(TABLE, newUser);

    }
    
    return {
        list,
        getUser,
        addUser,
    }

}
