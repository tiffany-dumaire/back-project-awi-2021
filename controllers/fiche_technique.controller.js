const model = require('../models/fiche_technique.model');

exports.getAllFichesTechniques = (res) => {
    model.getAllFichesTechniques(res);
}

exports.getByCategorie = (id, res) => {
    model.getByCategorie(id, res);
}