const db = require('../database/generic_functions');
const table = 'categorie_fiches';
const primaryKey = 'id_categorie_fiche';
const categorie_fiches = {table: table, primaryKey: primaryKey, attributs: {libelle: 'categorie_fiche', color: 'color_fiche'}};

/**
 * Récupération de toutes les catégories de fiches techniques
 * @param {*} res 
 */
exports.getAllCategoriesFiches = (res) => {
    db.queryAll(categorie_fiches.table, (result) => {
        res.status(200).send(result);
    });
}

/**
 * Récupération d'une catégorie de fiches techniques par id
 * @param {*} id 
 * @param {*} res 
 */
exports.getCategorieFicheById = (id, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE ${primaryKey} = ${id}`, (result) => {
        res.status(200).send(result);
    });
}

/**
 * Modifier une catégorie de fiches techniques par id
 * @param {*} id_categorie_fiche 
 * @param {*} req 
 * @param {*} res 
 */
exports.modifyCategoryFiche = (id_categorie_fiche, req, res) => {
    db.queryData(`UPDATE ${table} SET categorie_fiche='${req.body.categorie_fiche}', color_fiche='${req.body.color_fiche}' WHERE ${primaryKey}=${id_categorie_fiche}`, (result) => {
        res.status(200).send(result);
    });
}