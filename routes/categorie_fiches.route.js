const express = require('express');
const router = express.Router();
const controller = require('../controllers/categorie_fiches.controller');

router.get('/all', (req, res, next) => {
    controller.getAllCategoriesFiches(res);
});

router.get('/byID/:id_categorie_fiche', (req, res, next) => {
    const id = req.params['id_categorie_fiche'];
    controller.getCategorieFicheById(id, res);
});

router.put('/modify/:id_categorie_fiche', (req, res, next) => {
    const id = req.params['id_categorie_fiche'];
    controller.modifyCategoryFiche(id, req, res);
});

module.exports = router;