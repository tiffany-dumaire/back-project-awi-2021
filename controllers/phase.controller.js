const model = require('../models/phase.model');

exports.createPhase = (req, res) => {
    model.createPhase(req, res);
}

exports.getPhases = (res) => {
    model.getPhases(res);
}

exports.modifyPhase = (id_phase, req, res) => {
    model.modifyPhase(id_phase, req, res);
}

exports.getPhase = (id_phase, res) => {
    model.getPhase(id_phase, res);
}

exports.getDenrees = (id_phase, res) => {
    model.getDenrees(id_phase, res);
}

exports.addIngredient = (req, res) => {
    model.addIngredient(req, res);
}

exports.pullIngredient = (id_phase_ingredient, res) => {
    model.pullIngredient(id_phase_ingredient, res);
}
