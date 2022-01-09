const express = require('express');
const router = express.Router();
const controller = require('../controllers/categorie.controller');

/**
 * Récupération de toutes les catégories d'ingrédients
 */
router.get('/all', (req, res, next) => {
    controller.getAllCategoriesIngredients(res);
});

/**
 * Récupération d'une catégorie d'ingrédients par id
 */
router.get('/byID/:id_categorie', (req, res, next) => {
    const id = req.params['id_categorie'];
    controller.getCategorieById(id, res);
})

/**
 * Modifier une catégorie d'ingrédients par id
 */
router.put('/modify/:id_categorie', (req, res, next) => {
    const id = req.params['id_categorie'];
    controller.modifyCategory(id, req, res);
});

module.exports = router;
