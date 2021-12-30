const model = require('../models/categorie.model');

exports.getAllCategoriesIngredients = (res) => {
    model.getAllCategoriesIngredients(res);
}

exports.getCategorieById = (id, res) => {
    model.getCategorieById(id, res);
}

exports.modifyCategory = (id_categorie, req, res) => {
    model.modifyCategory(id_categorie, req, res);
}