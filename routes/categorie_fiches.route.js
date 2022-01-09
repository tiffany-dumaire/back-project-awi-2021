const express = require('express');
const router = express.Router();
const controller = require('../controllers/categorie_fiches.controller');

/**
 * Récupération de toutes les catégories de fiches techniques
 */
router.get('/all', (req, res, next) => {
    controller.getAllCategoriesFiches(res);
});

/**
 * Récupération d'une catégorie de fiches techniques par id
 */
router.get('/byID/:id_categorie_fiche', (req, res, next) => {
    const id = req.params['id_categorie_fiche'];
    controller.getCategorieFicheById(id, res);
});

/**
 * Modifier une catégorie de fiches techniques par id
 */
router.put('/modify/:id_categorie_fiche', (req, res, next) => {
    const id = req.params['id_categorie_fiche'];
    controller.modifyCategoryFiche(id, req, res);
});

module.exports = router;