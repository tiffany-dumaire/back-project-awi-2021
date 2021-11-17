const model = require('../models/phase.model');

exports.addIngredients = (req,res) => {
    model.addIngredients(req,res);
}