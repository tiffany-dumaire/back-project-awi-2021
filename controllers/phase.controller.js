const model = require('../models/phase.model');

exports.createPhase = (req, res) => {
    model.createPhase(req, res);
}

exports.modifyPhase = (id_phase, req, res) => {
    model.modifyPhase(id_phase, req, res);
}

exports.addIngredient = (req, res) => {
    model.addIngredient(req, res);
}

exports.pullIngredient = (id_phase_ingredient, res) => {
    model.pullIngredient(id_phase_ingredient, res);
}
