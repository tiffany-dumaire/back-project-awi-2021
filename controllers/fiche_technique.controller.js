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

exports.getPhasesByFT = (id_fiche_technique, res) => {
    model.getPhasesByFT(id_fiche_technique, res);
}

exports.getDenreesByFTAndOrdre = (id_fiche_technique, ordre, res) => {
    model.getDenreesByFTAndOrdre(id_fiche_technique, ordre, res);
}

exports.searchFTsByIngredients = (search, res) => {
    model.searchFTsByIngredients(search, res);
}

exports.searchFTsByIngredientsAndCategorie = (search, id_categorie_fiche, res) => {
    model.searchFTsByIngredientsAndCategorie(search, id_categorie_fiche, res);
}

exports.searchFTsByLibelle = (search, res) => {
    model.searchFTsByLibelle(search, res);
}

exports.searchFTsByLibelleAndCategorie = (search, id_categorie_fiche, res) => {
    model.searchFTsByLibelleAndCategorie(search, id_categorie_fiche, res);
}

exports.createFT = (req, res) => {
    model.createFT(req, res);
}

/** DELETE **/

exports.deleteFT = (id_fiche_technique, res) => {
    model.deleteFT(id_fiche_technique, res);
}