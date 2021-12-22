const db = require('../database/generic_functions');
const table = 'parameters';
const primaryKey = 'libelle_parameters';

/** GET **/

exports.getParameter = (libelle, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE ${primaryKey}='${libelle}'`, (result) => {
        res.status(200).send(result);
    });
}