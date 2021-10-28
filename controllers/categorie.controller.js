const model = require('../models/categorie.model');

exports.getAllCategoriesIngredients = (res) => {
    model.getAllCategoriesIngredients(res);
}