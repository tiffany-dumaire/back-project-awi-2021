const db = require('../database/generic_functions');
const table = 'phase_ingredient';

//problem for the moment
exports.addIngredients = (req,res) => {
    db.insertAllValues(table, req.body, (result) => {
        res.status(200).send(result);
    });
}