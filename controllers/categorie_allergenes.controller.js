const model = require('../models/categorie_allergenes.model');

exports.getAllCategoriesAllergenes = (res) => {
    model.getAllCategoriesAllergenes(res);
}

exports.getCategorieAllergeneById = (id, res) => {
    model.getCategorieAllergeneById(id, res);
}
