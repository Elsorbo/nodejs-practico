
const { nanoid } = require("nanoid");

const db = {
    "user": [
        {id: 0, "name": "Juan", "age": 31},
        {id: 1, "name": "Juan 2", "age": 32},
        {id: 2, "name": "Juan 3", "age": 33}
    ]
}

async function list(table) {

    return db[table];

}

async function get(table, id) {

    return db[table].filter( e => e.id === parseInt(id) )[0] || null;

}

async function upsert(table, data) {

    if( !data.hasOwnProperty("id") ){
        data["id"] = nanoid(); }

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
    remove
}
