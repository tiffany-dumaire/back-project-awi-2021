const model = require('../models/responsable.model');

/**
 * Récupération de la liste des responsables
 * @param {*} res 
 */
exports.getResponsables = (res) => {
    model.getResponsables(res);
}