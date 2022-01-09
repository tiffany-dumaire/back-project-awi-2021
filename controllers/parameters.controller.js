const model = require('../models/parameters.model');

/**
 * Récupérer un paramètre par libellé
 * @param {*} libelle 
 * @param {*} res 
 */
exports.getParameter = (libelle, res) => {
    model.getParameter(libelle, res);
}

/**
 * Modifier un paramètre par libellé
 * @param {*} libelle 
 * @param {*} req 
 * @param {*} res 
 */
exports.modifyParameter = (libelle, req, res) => {
   model.modifyParameter(libelle, req, res);
}