const model = require('../models/categorie_fiches.model');

/**
 * Récupération des toutes les catégories de fiches techniques
 * @param {*} res 
 */
exports.getAllCategoriesFiches = (res) => {
    model.getAllCategoriesFiches(res);
}

/**
 * Récupération d'une catégorie de fiches techniques par id
 * @param {*} id 
 * @param {*} res 
 */
exports.getCategorieFicheById = (id, res) => {
    model.getCategorieFicheById(id, res);
}

/**
 * Modifier une catégorie de fiches techniques par id
 * @param {*} id_categorie_fiche 
 * @param {*} req 
 * @param {*} res 
 */
exports.modifyCategoryFiche = (id_categorie_fiche, req, res) => {
    model.modifyCategoryFiche(id_categorie_fiche, req, res);
}
