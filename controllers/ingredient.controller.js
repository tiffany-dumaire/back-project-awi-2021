const model = require('../models/ingredient.model');

/**
 * Récupérer tous les ingrédients
 * @param {*} res 
 */
exports.getAllIngredients = (res) => {
    model.getAllIngredients(res);
}

/**
 * Récupérer un ingrédient par code
 * @param {*} code 
 * @param {*} res 
 */
exports.getIngredientById = (code, res) => {
    model.getIngredientById(code, res);
}

/**
 * Récupérer tous les codes existants en bdd
 * @param {*} res 
 */
exports.getAllIds = (res) => {
    model.getAllIds(res);
}

/**
 * Récupérer la liste des allergènes
 * @param {*} res 
 */
exports.getAllergenes = (res) => {
    model.getAllergenes(res);
}

/**
 * Récupérer les ingrédients d'une catégorie donnée
 * @param {*} id 
 * @param {*} res 
 */
exports.getByCategorie = (id, res) => {
    model.getByCategorie(id, res);
}

/**
 * Récupérer un ingrédient par code
 * @param {*} id_ingredient 
 * @param {*} res 
 */
exports.getIngredient = (id_ingredient, res) => {
    model.getIngredient(id_ingredient, res);
}

/**
 * Récupérer un ingrédient par catégorie et par code
 * @param {*} id_categorie 
 * @param {*} id_ingredient 
 * @param {*} res 
 */
exports.getIngredientByCategorie = (id_categorie, id_ingredient, res) => {
    model.getIngredientByCategorie(id_categorie, id_ingredient, res);
}

/**
 * Récupérer les allergènes d'une catégorie d'allergènes donnée
 * @param {*} id 
 * @param {*} res 
 */
exports.getAllergenesByCategorie = (id, res) => {
    model.getAllergenesByCategorie(id, res);
}

/**
 * Récupérer un allergene dans une catégorie
 * @param {*} id_categorie 
 * @param {*} id_ingredient 
 * @param {*} res 
 */
exports.getAllergeneByCategorie = (id_categorie, id_ingredient, res) => {
    model.getAllergeneByCategorie(id_categorie, id_ingredient, res);
}

/**
 * Rechercher les ingrédients par libellé
 * @param {*} search 
 * @param {*} res 
 */
exports.searchIngredients = (search, res) => {
    model.searchIngredients(search, res);
}

/**
 * Rechercher un ingrédient par libellé et catégorie
 * @param {*} search 
 * @param {*} id_categorie 
 * @param {*} res 
 */
exports.searchIngredientsByCategorie = (search, id_categorie, res) => {
    model.searchIngredientsByCategorie(search, id_categorie, res);
}

/**
 * Rechercher un ingrédient par libellé et catégorie d'allergène
 * @param {*} search 
 * @param {*} id_categorie_allergene 
 * @param {*} res 
 */
exports.searchIngredientsByCategorieAllergene = (search, id_categorie_allergene, res) => {
    model.searchIngredientsByCategorieAllergene(search, id_categorie_allergene, res);
}

/** POST **/

/**
 * Créer un ingrédient
 * @param {*} req 
 * @param {*} res 
 */
exports.createIngredient = (req, res) => {
    model.createIngredient(req, res);
}

/** PUT **/

/**
 * Modifier un ingrédient
 * @param {*} id_ingredient 
 * @param {*} req 
 * @param {*} res 
 */
exports.modifyIngredient = (id_ingredient, req, res) => {
    model.modifyIngredient(id_ingredient, req, res);
}

/** DELETE **/

/**
 * Supprimer un ingrédient
 * @param {*} code 
 * @param {*} res 
 */
exports.deleteIngredient = (code, res) => {
    model.deleteIngredient(code, res);
}

/** STOCK INGREDIENT **/

/**
 * Récupérer tous les stocks des ingrédients
 * @param {*} res 
 */
exports.getAllStocks = (res) => {
    model.getAllStocks(res);
}

/**
 * Récupérer tous les stocks des ingrédients pour une catégorie donnée
 * @param {*} id_categorie 
 * @param {*} res 
 */
exports.getStocksByCategorie = (id_categorie, res) => {
    model.getStocksByCategorie(id_categorie, res);
}

/**
 * Modifier les stocks d'un ingrédient
 * @param {*} code 
 * @param {*} req 
 * @param {*} res 
 */
exports.modifyStock = (code, req, res) => {
    model.modifyStock(code, req, res);
}