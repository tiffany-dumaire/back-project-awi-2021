const express = require('express');
const router = express.Router();
const controller = require('../controllers/phase.controller');

/**
 * Récupérer toutes les phases
 */
router.get('/all', (req, res, next) => {
    controller.getPhases(res);
});

/**
 * Récupérer les phases d'une fiche technique
 */
router.get('/byFT/:id_fiche_technique', (req, res, next) => {
    const id = req.params['id_fiche_technique'];
    controller.getPhaseByFT(id, res);
});

/**
 * Récupérer la phase complète
 */
router.get('/detail/:id_phase', (req, res, next) => {
    const id = req.params['id_phase'];
    controller.getPhaseComplete(id, res);
});

/**
 * Récupérer les infos d'une phase
 */
router.get('/infos/:id_phase', (req, res, next) => {
    const id = req.params['id_phase'];
    controller.getPhase(id, res);
});

/**
 * Récupérer les denrées d'une phase
 */
router.get('/denrees/:id_phase', (req, res, next) => {
    const id = req.params['id_phase'];
    controller.getDenrees(id, res)
});

/**
 * Récupérer les ingrédients d'une fiche technique
 */
router.get('/ingredients/:id_fiche_technique', (req, res, next) => {
    const id = req.params['id_fiche_technique'];
    controller.getPhaseWithIngredients(id, res);
});

/** POST **/

/**
 * Créer une phase
 */
router.post('/create', (req, res, next) => {
    controller.createPhase(req, res);
});

/**
 * Ajouter un ingrédient à une phase
 */
router.post('/add_ingredient', (req, res, next) => {
    controller.addIngredient(req, res);
});

/**
 * Ajouter une phase et l'ordre dans la fiche technique
 */
router.post('/phase_FT', (req, res, next) => {
    controller.addOrdrePhaseFT(req, res);
});

/**
 * Ajouter la quantité d'ingrédient d'une phase à une fiche technique
 */
router.post('/phase_ingredient_quantity', (req, res, next) => {
    controller.postQuantityIngredient(req, res);
});

/** PUT **/ 

/**
 * Modifier une phase 
 */
 router.put('/modify/:id_phase', (req, res, next) => {
    const id = req.params['id_phase'];
    controller.modifyPhase(id, req, res);
});

/**
 * Modifier une phase et l'ordre dans la fiche technique
 */
 router.put('/phase_FT/modify/:id_phase_ft', (req, res, next) => {
    const id = req.params['id_phase_ft'];
    controller.modifyOrdrePhaseFT(id, req, res);
});

/**
 * Modifier la quantité d'ingrédient d'une phase à une fiche technique
 */
 router.put('/phase_ingredient_quantity/modify/:id_phase_ingredient', (req, res, next) => {
    const id = req.params['id_phase_ingredient'];
    controller.putQuantityIngredient(id, req, res);
});

/** DELETE **/

/**
 * Retirer un ingrédient d'une phase
 */
router.delete('/pull_ingredient/:id_phase_ingredient', (req, res, next) => {
    const id = req.params['id_phase_ingredient'];
    controller.pullIngredient(id, res);
});

/**
 * Supprimer une phase par id
 */
router.delete('/delete/:id_phase', (req, res, next) => {
    const id = req.params['id_phase'];
    controller.deletePhase(id, res);
});

module.exports = router;