const express = require('express');
const router = express.Router();
const controller = require('../controllers/parameters.controller');

/**
 * Récupérer un paramètre par libellé
 */
router.get('/:parameter', (req, res, next) => {
    const libelle = req.params['parameter'];
    controller.getParameter(libelle, res);
});

/**
 * Modifier un paramètre par libellé
 */
router.put('/:parameter', (req, res, next) => {
    const libelle = req.params['parameter'];
    controller.modifyParameter(libelle, req, res);
});

module.exports = router;