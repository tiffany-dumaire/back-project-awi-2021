const db = require('../database/generic_functions');
const table = 'categorie';
const primaryKey = 'id_categorie';

exports.getAllCategoriesIngredients = (res) => {
    db.queryAll(table, (result) => {
        res.status(200).send(result);
    });
}