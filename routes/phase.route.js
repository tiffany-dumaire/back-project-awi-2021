const express = require('express');
const router = express.Router();
const controller = require('../controllers/phase.controller');

router.post('/create', (req, res, next) => {
    controller.createPhase(req, res);
});

router.post('/creates', (req, res, next) => {
    controller.addIngredients(req,res);
});

module.exports = router;