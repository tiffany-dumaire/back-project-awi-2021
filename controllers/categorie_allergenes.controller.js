const model = require('../models/categorie_allergenes.model');

exports.getAllCategoriesAllergenes = (res) => {
    model.getAllCategoriesAllergenes(res);
}

exports.getCategorieAllergeneById = (id, res) => {
    model.getCategorieAllergeneById(id, res);
}

exports.modifyCategoryAllergene = (id_categorie_allergene, req, res) => {
    model.modifyCategoryAllergene(id_categorie_allergene, req, res);
}
