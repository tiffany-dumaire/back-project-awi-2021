const model = require('../models/categorie.model');

exports.getAllCategoriesIngredients = (res) => {
    model.getAllCategoriesIngredients(res);
}

exports.getCategorieById = (id, res) => {
    model.getCategorieById(id, res);
}