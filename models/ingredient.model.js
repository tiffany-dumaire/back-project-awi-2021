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

exports.getByCategorie = (id, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE id_categorie = ${id}`, (result) => {
        res.status(200).send(result);
    });
}

exports.getAllergenesByCategorie = (id, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE id_categorie_allergene = ${id}`, (result) => {
        res.status(200).send(result);
    });
}

exports.searchIngredients = (search, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE libelle LIKE '%${search}%' ORDER BY ${primaryKey} ASC`, (result) => {
        res.status(200).send(result);
    });
}
