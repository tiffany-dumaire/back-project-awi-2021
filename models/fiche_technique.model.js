const db = require('../database/generic_functions');
const table = 'fiche_technique';

exports.getAllFichesTechniques = (res) => {
    db.queryAll(table, (result) => {
        res.status(200).send(result);
    });
}

exports.getByCategorie = (id, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE id_categorie_fiche = ${id}`, (result) => {
        res.status(200).send(result);
    });
}