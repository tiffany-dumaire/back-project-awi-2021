const db = require('../database/generic_functions');
const table = 'responsable';
const primaryKey = 'id_responsable';

/**
 * Récupération de la liste des responsables
 * @param {*} res 
 */
exports.getResponsables = (res) => {
    db.queryAll(table, (result) => {
        res.status(200).send(result);
    });
}