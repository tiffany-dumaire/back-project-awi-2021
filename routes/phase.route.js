const express = require('express');
const router = express.Router();
const controller = require('../controllers/phase.controller');

router.post('/create', (req, res, next) => {
    controller.createPhase(req, res);
});

router.put('/modify/:id_phase', (req, res, next) => {
    const id = req.params['id_phase'];
    controller.modifyPhase(id, req, res);
});

router.post('/creates', (req, res, next) => {
    controller.addIngredients(req, res);
});

module.exports = router;