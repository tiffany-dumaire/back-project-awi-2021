const express = require('express');
const router = express.Router();
const controller = require('../controllers/parameters.controller');

router.get('/:parameter', (req, res, next) => {
    const libelle = req.params['parameter'];
    controller.getParameter(libelle, res);
});

module.exports = router;