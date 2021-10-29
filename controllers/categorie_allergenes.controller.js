const model = require('../models/categorie_allergenes.model');

exports.getAllCategoriesAllergenes = (res) => {
    model.getAllCategoriesAllergenes(res);
}