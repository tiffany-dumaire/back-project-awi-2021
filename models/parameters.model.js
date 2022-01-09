const db = require('../database/generic_functions');
const table = 'parameters';
const primaryKey = 'libelle_parameters';

/** GET **/

/**
 * Récupérer un paramètre par libellé
 * @param {*} libelle 
 * @param {*} res 
 */
exports.getParameter = (libelle, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE ${primaryKey}='${libelle}'`, (result) => {
        res.status(200).send(result);
    });
}

/** PUT **/

/**
 * Modifier un paramètre par libellé
 * @param {*} libelle 
 * @param {*} req 
 * @param {*} res 
 */
exports.modifyParameter = (libelle, req, res) => {
    db.queryData(`UPDATE ${table} SET value='${req.body.value}', value2='${req.body.value2}', utile=${req.body.utile} WHERE ${primaryKey}='${libelle}'`, (result) => {
        res.status(200).send(result);
    });
}