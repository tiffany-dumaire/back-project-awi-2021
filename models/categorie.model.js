const db = require('../database/generic_functions');
const table = 'categorie';
const primaryKey = 'id_categorie';

exports.getAllCategoriesIngredients = (res) => {
    db.queryAll(table, (result) => {
        res.status(200).send(result);
    });
}

exports.getCategorieById = (id, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE id_categorie = ${id}`, (result) => {
        res.status(200).send(result);
    });
}

exports.modifyCategory = (id_categorie, req, res) => {
    db.queryData(`UPDATE ${table} SET categorie='${req.body.categorie}', color='${req.body.color}' WHERE ${primaryKey}=${id_categorie}`, (result) => {
        res.status(200).send(result);
    });
}