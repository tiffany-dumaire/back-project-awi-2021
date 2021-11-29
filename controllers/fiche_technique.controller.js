const model = require('../models/fiche_technique.model');

exports.getAllFichesTechniques = (res) => {
    model.getAllFichesTechniques(res);
}

exports.getInfosFiche = (id, res) => { 
    model.getInfosFiche(id, res);
}

exports.getByCategorie = (id, res) => {
    model.getByCategorie(id, res);
}

exports.getIngredientsByFT = (id_fiche_technique, res) => {
    model.getIngredientsByFT(id_fiche_technique, res);
}