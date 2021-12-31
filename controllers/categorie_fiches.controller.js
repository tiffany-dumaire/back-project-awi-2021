const model = require('../models/categorie_fiches.model');

exports.getAllCategoriesFiches = (res) => {
    model.getAllCategoriesFiches(res);
}

exports.getCategorieFicheById = (id, res) => {
    model.getCategorieFicheById(id, res);
}

exports.modifyCategoryFiche = (id_categorie_fiche, req, res) => {
    model.modifyCategoryFiche(id_categorie_fiche, req, res);
}
