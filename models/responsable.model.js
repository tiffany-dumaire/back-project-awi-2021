const db = require('../database/generic_functions');
const table = 'responsable';
const primaryKey = 'id_responsable';

exports.getResponsables = (res) => {
    db.queryAll(table, (result) => {
        res.status(200).send(result);
    });
}