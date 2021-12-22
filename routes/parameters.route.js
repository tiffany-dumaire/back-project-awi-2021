const express = require('express');
const router = express.Router();
const controller = require('../controllers/parameters.controller');

router.get('/:parameter', (req, res, next) => {
    const libelle = req.params['parameter'];
    controller.getParameter(libelle, res);
});

router.put('/:parameter', (req, res, next) => {
    const libelle = req.params['parameter'];
    controller.modifyParameter(libelle, req, res);
});

module.exports = router;