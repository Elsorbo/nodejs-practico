
const db = {
    "user": [
        {id: 0, "name": "Juan", "age": 31},
        {id: 1, "name": "Juan 2", "age": 32},
        {id: 2, "name": "Juan 3", "age": 33},
    ]
}

async function authQuery(table, data) {
    
    const [key] = Object.keys(data);
    
    return db[table].filter( e => e[key] === data[key] )[0] || null;

}

async function list(table) {

    return db[table];

}

async function get(table, id) {

    return db[table].filter( e => e.id === parseInt(id) )[0] || null;

}

async function upsert(table, data) {

    if(!db.hasOwnProperty(table)) { 
        db[table] = []; }

    db[table].push(data);

    return data;

}

async function remove(tabla, id) {
    
    return true;

}

module.exports = {
    list,
    get,
    upsert,
    remove,
    authQuery,
}
