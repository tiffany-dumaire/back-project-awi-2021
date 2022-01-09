const express = require('express');
const router = express.Router();
const controller = require('../controllers/categorie_allergenes.controller');

/**
 * Récupération de toutes les catégories d'allergènes
 */
router.get('/all', (req, res, next) => {
    controller.getAllCategoriesAllergenes(res);
});

/**
 * Récupération d'une catégorie d'allergènes par id
 */
router.get('/byID/:id_categorie_allergene', (req, res, next) => {
    const id = req.params['id_categorie_allergene'];
    controller.getCategorieAllergeneById(id, res);
});

/**
 * Modifier une catégorie d'allergènes par id
 */
router.put('/modify/:id_categorie_allergene', (req, res, next) => {
    const id = req.params['id_categorie_allergene'];
    controller.modifyCategoryAllergene(id, req, res);
});

module.exports = router;