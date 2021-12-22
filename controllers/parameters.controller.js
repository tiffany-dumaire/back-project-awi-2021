const model = require('../models/parameters.model');

exports.getParameter = (libelle, res) => {
    model.getParameter(libelle, res);
}