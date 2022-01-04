const db = require('../database/generic_functions');
const service = require('../services/phase.service');
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
};

exports.getPhases = (res) => {
    db.queryAll(table, (result) => {
        res.status(200).send(result);
    });
};

exports.getPhaseComplete = (id_phase, res) => {
    db.queryData(`SELECT p.*, i.code, i.libelle 
                  FROM phase p
                  LEFT OUTER JOIN phase_ingredient pi ON pi.id_phase = p.id_phase
                  LEFT OUTER JOIN ingredient i ON i.code = pi.code
                  WHERE p.id_phase = ${id_phase}
                  ORDER BY i.libelle ASC`,
    (result) => {
        res.status(200).send(service.phase(result));
    });
};

exports.modifyPhase = (id, req, res) => {
    db.queryData(`UPDATE ${table} SET libelle_phase="${req.body.libelle_phase}", libelle_denrees="${req.body.libelle_denrees}", description_phase="${req.body.description_phase}", duree_phase=${req.body.duree_phase} WHERE ${primaryKey}=${id}`, (result) => {
        res.status(200).send(result);
    });
};

exports.getPhase = (id_phase, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE ${primaryKey}=${id_phase}`, (result) => {
        res.status(200).send(result);
    });
};

exports.getDenrees = (id_phase, res) => {
    db.queryData(`SELECT * FROM ingredient i JOIN phase_ingredient pi ON pi.code = i.code WHERE pi.${primaryKey}=${id_phase}`, (result) => {
        res.status(200).send(result);
    });
};

exports.getPhaseWithIngredients = (id_fiche_technique, res) => {
    db.queryData(`SELECT p.id_phase, p.libelle_phase, pi.id_phase_ingredient, i.libelle
                  FROM phase p
                  LEFT OUTER JOIN phase_ingredient pi ON pi.id_phase = p.id_phase
                  LEFT OUTER JOIN ingredient i ON i.code = pi.code
                  WHERE p.id_phase IN (
                      SELECT pft.id_phase
                      FROM phase_FT pft
                      WHERE pft.id_fiche_technique = ${id_fiche_technique}
                  )
                  ORDER BY p.id_phase, i.libelle`,
    (result) => {
        res.status(200).send(service.phasesWithIngredients(result));
    });
};

exports.addIngredient = (req, res) => {
    db.insertValue(table2, req.body, (result) => {
        res.status(200).send(result);
    });
};

exports.addOrdrePhaseFT = (req, res) => {
    db.insertValue(table3, req.body, (result) => {
        res.status(200).send(result);
    });
};

exports.pullIngredient = (id_phase_ingredient, res) => {
    db.deleteValue(table2, primaryKey2, id_phase_ingredient, (result) => {
        res.status(200).send(result);
    });
};

/** POST **/

exports.postQuantityIngredient = (req, res) => {
    db.insertValue('quantity_ingredient_phase_ft', req.body, (result) => {
        res.status(200).send(result);
    });
};

/** PUT **/

/** DELETE **/

exports.deletePhase = (id_phase, res) => {
    db.deleteValue(table, primaryKey, id_phase, (result) => {
        res.status(200).send(result);
    });
};