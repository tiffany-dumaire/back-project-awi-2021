const model = require('../models/parameters.model');

exports.getParameter = (libelle, res) => {
    model.getParameter(libelle, res);
}

exports.modifyParameter = (libelle, req, res) => {
   model.modifyParameter(libelle, req, res);
}