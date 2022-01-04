const model = require('../models/phase.model');

exports.createPhase = (req, res) => {
    model.createPhase(req, res);
};

exports.getPhases = (res) => {
    model.getPhases(res);
};

exports.getPhaseComplete = (id_phase, res) => {
    model.getPhaseComplete(id_phase, res);
};

exports.modifyPhase = (id_phase, req, res) => {
    model.modifyPhase(id_phase, req, res);
};

exports.getPhase = (id_phase, res) => {
    model.getPhase(id_phase, res);
};

exports.getDenrees = (id_phase, res) => {
    model.getDenrees(id_phase, res);
};

exports.addIngredient = (req, res) => {
    model.addIngredient(req, res);
};

exports.addOrdrePhaseFT = (req, res) => {
    model.addOrdrePhaseFT(req, res);
};

exports.pullIngredient = (id_phase_ingredient, res) => {
    model.pullIngredient(id_phase_ingredient, res);
};

exports.getPhaseWithIngredients = (id_fiche_technique, res) => {
    model.getPhaseWithIngredients(id_fiche_technique, res);
};

/** POST **/

exports.postQuantityIngredient = (req, res) => {
    model.postQuantityIngredient(req, res);
};

/** DELETE **/

exports.deletePhase = (id_phase, res) => {
    model.deletePhase(id_phase, res);
};