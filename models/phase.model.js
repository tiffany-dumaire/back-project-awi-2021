const db = require('../database/generic_functions');
const table = 'phase';
const primaryKey = 'id_phase';
const table2 = 'phase_ingredient';
const primaryKey2 = 'id_phase_ingredient';
const table3 = 'phase_FT';
const primaryKey3 = 'id_phase_ft';

exports.createPhase = (req, res) => {
    db.insertValue(table, req.body, (result) => {
        res.status(200).send(result);
    });
}

exports.getPhases = (res) => {
    db.queryAll(table, (result) => {
        res.status(200).send(result);
    });
}

exports.modifyPhase = (id, req, res) => {
    db.queryData(`UPDATE ${table} SET libelle_phase="${req.body.libelle_phase}", libelle_denrees="${req.body.libelle_denrees}", description_phase="${req.body.description_phase}", duree_phase=${req.body.duree_phase} WHERE ${primaryKey}=${id}`, (result) => {
        res.status(200).send(result);
    });
}

exports.getPhase = (id_phase, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE ${primaryKey}=${id_phase}`, (result) => {
        res.status(200).send(result);
    });
}

exports.getDenrees = (id_phase, res) => {
    db.queryData(`SELECT * FROM ingredient i JOIN phase_ingredient pi ON pi.code = i.code WHERE pi.${primaryKey}=${id_phase}`, (result) => {
        res.status(200).send(result);
    });
}

exports.addIngredient = (req, res) => {
    db.insertValue(table2, req.body, (result) => {
        res.status(200).send(result);
    });
}

exports.addOrdrePhaseFT = (req, res) => {
    db.insertValue(table3, req.body, (result) => {
        res.status(200).send(result);
    });
};

exports.pullIngredient = (id_phase_ingredient, res) => {
    db.deleteValue(table2, primaryKey2, id_phase_ingredient, (result) => {
        res.status(200).send(result);
    });
}
