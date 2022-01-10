const model = require('../models/phase.model');

/**
 * Récupérer toutes les phases
 * @param {*} res 
 */
exports.getPhases = (res) => {
    model.getPhases(res);
};

/**
 * Récupérer les phases d'une fiche technique
 * @param {*} id_fiche_technique 
 * @param {*} res 
 */
exports.getPhaseByFT = (id_fiche_technique, res) => {
    model.getPhaseByFT(id_fiche_technique, res);
};

/**
 * Récupérer la phase complète
 * @param {*} id_phase 
 * @param {*} res 
 */
exports.getPhaseComplete = (id_phase, res) => {
    model.getPhaseComplete(id_phase, res);
};

/**
 * Récupérer les infos d'une phase
 * @param {*} id_phase 
 * @param {*} res 
 */
exports.getPhase = (id_phase, res) => {
    model.getPhase(id_phase, res);
};

/**
 * Récupérer les denrées d'une phase
 * @param {*} id_phase 
 * @param {*} res 
 */
exports.getDenrees = (id_phase, res) => {
    model.getDenrees(id_phase, res);
};

/**
 * Récupérer les ingrédients d'une fiche technique
 * @param {*} id_fiche_technique 
 * @param {*} res 
 */
exports.getPhaseWithIngredients = (id_fiche_technique, res) => {
    model.getPhaseWithIngredients(id_fiche_technique, res);
};

/** POST **/

/**
 * Créer une phase
 * @param {*} req 
 * @param {*} res 
 */
 exports.createPhase = (req, res) => {
    model.createPhase(req, res);
};

/**
 * Ajouter la quantité d'ingrédient d'une phase à une fiche technique
 * @param {*} req 
 * @param {*} res 
 */
exports.postQuantityIngredient = (req, res) => {
    model.postQuantityIngredient(req, res);
};

/**
 * Ajouter un ingrédient à une phase
 * @param {*} req 
 * @param {*} res 
 */
exports.addIngredient = (req, res) => {
    model.addIngredient(req, res);
};

/**
 * Ajouter une phase et l'ordre dans la fiche technique
 * @param {*} req 
 * @param {*} res 
 */
exports.addOrdrePhaseFT = (req, res) => {
    model.addOrdrePhaseFT(req, res);
};

/** PUT **/

/**
 * Modifier une phase 
 * @param {*} id_phase 
 * @param {*} req 
 * @param {*} res 
 */
exports.modifyPhase = (id_phase, req, res) => {
    model.modifyPhase(id_phase, req, res);
};

exports.modifyOrdrePhaseFT = (id_phase_ft, req, res) => {
    model.modifyOrdrePhaseFT(id_phase_ft, req, res);
};

/**
 * Modifier la quantité d'ingrédient d'une phase à une fiche technique
 * @param {*} id_phase_ingredient 
 * @param {*} req 
 * @param {*} res 
 */
exports.putQuantityIngredient = (id_phase_ingredient, req, res) => {
    model.putQuantityIngredient(id_phase_ingredient, req, res);
};

/** DELETE **/

/**
 * Supprimer une phase par id
 * @param {*} id_phase 
 * @param {*} res 
 */
exports.deletePhase = (id_phase, res) => {
    model.deletePhase(id_phase, res);
};

/**
 * Retirer un ingrédient d'une phase
 * @param {*} id_phase_ingredient 
 * @param {*} res 
 */
 exports.pullIngredient = (id_phase_ingredient, res) => {
    model.pullIngredient(id_phase_ingredient, res);
};