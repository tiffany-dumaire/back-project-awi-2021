const db = require('../database/dbConfig');
const table = 'ingredient';
const primaryKey = 'code';

exports.getAllIngredients = (res) => {
    db.queryAll(table, (result) => {
        res.status(200).send(result);
    });
}

exports.getAllergenes = (res) => {
    db.queryData(`SELECT * FROM ${table} WHERE allergene=true`, (result) => {
        res.status(200).send(result);
    })
}

exports.getUserById = (id,res) => {
    db.queryData(`SELECT * FROM ${table} WHERE ${primaryKey} = ${id}`, (result) => {
        res.status(200).send(result);
    });
}
