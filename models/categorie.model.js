const db = require('../database/dbConfig');
const table = 'categorie';
const primaryKey = 'id_categorie';

exports.getAllCategoriesIngredients = (res) => {
    db.queryAll(table, (result) => {
        res.status(200).send(result);
    });
}