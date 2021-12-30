const db = require('../database/generic_functions');
const table = 'categorie_allergenes';
const primaryKey = 'id_categorie_allergene';
const categorie_allergenes = {table: table, primaryKey: primaryKey, attributs: {libelle: 'categorie_allergene', color: 'color_allergene'}};

exports.getAllCategoriesAllergenes = (res) => {
    db.queryAll(categorie_allergenes.table, (result) => {
        res.status(200).send(result);
    });
}

exports.getCategorieAllergeneById = (id, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE ${primaryKey} = ${id}`, (result) => {
        res.status(200).send(result);
    });
}

exports.modifyCategoryAllergene = (id_categorie_allergene, req, res) => {
    db.queryData(`UPDATE ${table} SET categorie_allergene='${req.body.categorie_allergene}', color_allergene='${req.body.color_allergene}' WHERE ${primaryKey}=${id_categorie_allergene}`, (result) => {
        res.status(200).send(result);
    });
}