const express = require('express');
const router = express.Router();
const controller = require('../controllers/phase.controller');

router.post('/create', (req, res, next) => {
    controller.createPhase(req, res);
});

router.get('/all', (req, res, next) => {
    controller.getPhases(res);
});

router.get('/byFT/:id_fiche_technique', (req, res, next) => {
    const id = req.params['id_fiche_technique'];
    controller.getPhaseByFT(id, res);
});

router.get('/detail/:id_phase', (req, res, next) => {
    const id = req.params['id_phase'];
    controller.getPhaseComplete(id, res);
});

router.put('/modify/:id_phase', (req, res, next) => {
    const id = req.params['id_phase'];
    controller.modifyPhase(id, req, res);
});

router.get('/infos/:id_phase', (req, res, next) => {
    const id = req.params['id_phase'];
    controller.getPhase(id, res);
});

router.get('/denrees/:id_phase', (req, res, next) => {
    const id = req.params['id_phase'];
    controller.getDenrees(id, res)
});

router.get('/ingredients/:id_fiche_technique', (req, res, next) => {
    const id = req.params['id_fiche_technique'];
    controller.getPhaseWithIngredients(id, res);
});

/** POST **/

router.post('/add_ingredient', (req, res, next) => {
    controller.addIngredient(req, res);
});

router.post('/phase_FT', (req, res, next) => {
    controller.addOrdrePhaseFT(req, res);
});

router.post('/phase_ingredient_quantity', (req, res, next) => {
    controller.postQuantityIngredient(req, res);
});

/** DELETE **/

router.delete('/pull_ingredient/:id_phase_ingredient', (req, res, next) => {
    const id = req.params['id_phase_ingredient'];
    controller.pullIngredient(id, res);
});

router.delete('/delete/:id_phase', (req, res, next) => {
    const id = req.params['id_phase'];
    controller.deletePhase(id, res);
});

module.exports = router;