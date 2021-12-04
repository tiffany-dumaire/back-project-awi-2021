const db = require('../database/generic_functions');
const table = 'phase';
const primaryKey = 'id_phase';
const table2 = 'phase_ingredient';

exports.createPhase = (req, res) => {
    db.insertValue(table, req.body, (result) => {
        res.status(200).send(result);
    });
}

exports.modifyPhase = (id, req, res) => {
    db.queryData(`UPDATE ${table} SET libelle_phase=${req.body.libelle_phase}, libelle_denrees=${req.body.libelle_denrees}, description_phase=${req.body.description_phase}, duree_phase=${req.body.duree_phase} WHERE ${primaryKey}=${id}`, (result) => {
        res.status(200).send(result);
    });
}

//problem for the moment
exports.addIngredients = (req, res) => {
    db.insertAllValues(table2, req.body, (result) => {
        res.status(200).send(result);
    });
}