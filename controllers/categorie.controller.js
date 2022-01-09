const model = require('../models/categorie.model');

/**
 * Récupération de toutes les catégories d'ingrédients
 * @param {*} res 
 */
exports.getAllCategoriesIngredients = (res) => {
    model.getAllCategoriesIngredients(res);
}

/**
 * Récupération d'une catégorie d'ingrédients par id
 * @param {*} id 
 * @param {*} res 
 */
exports.getCategorieById = (id, res) => {
    model.getCategorieById(id, res);
}

/**
 * Modifier une catégorie d'ingrédients par id
 * @param {*} id_categorie 
 * @param {*} req 
 * @param {*} res 
 */
exports.modifyCategory = (id_categorie, req, res) => {
    model.modifyCategory(id_categorie, req, res);
}