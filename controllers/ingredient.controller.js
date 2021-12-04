const model = require('../models/ingredient.model');

exports.getAllIngredients = (res) => {
    model.getAllIngredients(res);
}

exports.getAllIds = (res) => {
    model.getAllIds(res);
}

exports.getAllergenes = (res) => {
    model.getAllergenes(res);
}

exports.getByCategorie = (id, res) => {
    model.getByCategorie(id, res);
}

exports.getIngredient = (id_ingredient, res) => {
    model.getIngredient(id_ingredient, res);
}

exports.getIngredientByCategorie = (id_categorie, id_ingredient, res) => {
    model.getIngredientByCategorie(id_categorie, id_ingredient, res);
}

exports.getAllergenesByCategorie = (id, res) => {
    model.getAllergenesByCategorie(id, res);
}

exports.getAllergeneByCategorie = (id_categorie, id_ingredient, res) => {
    model.getAllergeneByCategorie(id_categorie, id_ingredient, res);
}

exports.searchIngredients = (search, res) => {
    model.searchIngredients(search, res);
}

exports.searchIngredientsByCategorie = (search, id_categorie, res) => {
    model.searchIngredientsByCategorie(search, id_categorie, res);
}

exports.searchIngredientsByCategorieAllergene = (search, id_categorie_allergene, res) => {
    model.searchIngredientsByCategorieAllergene(search, id_categorie_allergene, res);
}

exports.createIngredient = (req, res) => {
    model.createIngredient(req, res);
}

exports.modifyIngredient = (id_ingredient, req, res) => {
    model.modifyIngredient(id_ingredient, req, res);
}

/** STOCK INGREDIENT **/

exports.getAllStocks = (res) => {
    model.getAllStocks(res);
}

exports.getStocksByCategorie = (id_categorie, res) => {
    model.getStocksByCategorie(id_categorie, res);
}

exports.modifyStock = (code, req, res) => {
    model.modifyStock(code, req, res);
}