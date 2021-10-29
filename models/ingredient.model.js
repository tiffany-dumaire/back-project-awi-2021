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

exports.getByCategorie = (id,res) => {
    db.queryData(`SELECT * FROM ${table} WHERE id_categorie = ${id}`, (result) => {
        res.status(200).send(result);
    });
}