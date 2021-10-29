const model = require('../models/ingredient.model');

exports.getAllIngredients = (res) => {
    model.getAllIngredients(res);
}

exports.getAllergenes = (res) => {
    model.getAllergenes(res);
}

exports.getByCategorie = (id,res) => {
    model.getByCategorie(id,res);
}

exports.getAllergenesByCategorie = (id,res) => {
    model.getAllergenesByCategorie(id,res);
}