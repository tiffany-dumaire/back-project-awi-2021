const db = require('../database/generic_functions');
const table = 'phase';
const table2 = 'phase_ingredient'

exports.createPhase = (req, res) => {
    db.insertValue(table, req.body, (result) => {
        res.status(200).send(result);
    });
}

//problem for the moment
exports.addIngredients = (req,res) => {
    db.insertAllValues(table2, req.body, (result) => {
        res.status(200).send(result);
    });
}