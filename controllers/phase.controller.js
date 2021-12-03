const model = require('../models/phase.model');

exports.createPhase = (req, res) => {
    model.createPhase(req, res);
}

exports.addIngredients = (req,res) => {
    model.addIngredients(req,res);
}