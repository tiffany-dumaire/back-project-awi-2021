const db = require('../database/dbConfig');
const table = 'categorie_fiches';
const primaryKey = 'id_categorie_fiche';
const categorie_fiches = {table: table, primaryKey: primaryKey, attributs: {libelle: 'categorie_fiche', color: 'color_fiche'}};

exports.getAllCategoriesFiches = (res) => {
    db.queryAll(categorie_fiches.table, (result) => {
        res.status(200).send(result);
    });
}