const model = require('../models/categorie_fiches.model');

exports.getAllCategoriesFiches = (res) => {
    model.getAllCategoriesFiches(res);
}