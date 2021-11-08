const db = require('../database/generic_functions');
const table = 'categorie_allergenes';
const primaryKey = 'id_categorie_allergene';
const categorie_allergenes = {table: table, primaryKey: primaryKey, attributs: {libelle: 'categorie_allergene', color: 'color_allergene'}};

exports.getAllCategoriesAllergenes = (res) => {
    db.queryAll(categorie_allergenes.table, (result) => {
        res.status(200).send(result);
    });
}