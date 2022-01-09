const model = require('../models/categorie_allergenes.model');

/**
 * Récupération des toutes les catégories d'allergènes
 * @param {*} res 
 */
exports.getAllCategoriesAllergenes = (res) => {
    model.getAllCategoriesAllergenes(res);
}

/**
 * Récupération d'une catégorie d'allergènes par id
 * @param {*} id 
 * @param {*} res 
 */
exports.getCategorieAllergeneById = (id, res) => {
    model.getCategorieAllergeneById(id, res);
}

/**
 * Modifier une catégorie d'allergènes par id
 * @param {*} id_categorie_allergene 
 * @param {*} req 
 * @param {*} res 
 */
exports.modifyCategoryAllergene = (id_categorie_allergene, req, res) => {
    model.modifyCategoryAllergene(id_categorie_allergene, req, res);
}
