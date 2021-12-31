const db = require('../database/generic_functions');
const table = 'categorie_fiches';
const primaryKey = 'id_categorie_fiche';
const categorie_fiches = {table: table, primaryKey: primaryKey, attributs: {libelle: 'categorie_fiche', color: 'color_fiche'}};

exports.getAllCategoriesFiches = (res) => {
    db.queryAll(categorie_fiches.table, (result) => {
        res.status(200).send(result);
    });
}

exports.getCategorieFicheById = (id, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE ${primaryKey} = ${id}`, (result) => {
        res.status(200).send(result);
    });
}

exports.modifyCategoryFiche = (id_categorie_fiche, req, res) => {
    db.queryData(`UPDATE ${table} SET categorie_fiche='${req.body.categorie_fiche}', color_fiche='${req.body.color_fiche}' WHERE ${primaryKey}=${id_categorie_fiche}`, (result) => {
        res.status(200).send(result);
    });
}