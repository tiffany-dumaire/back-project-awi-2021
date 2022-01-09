const express = require('express');
const router = express.Router();
const controller = require('../controllers/ingredient.controller');

/**
 * Récupérer tous les ingrédients
 */
router.get('/all', (req, res, next) => {
    controller.getAllIngredients(res);
});

/**
 * Récupérer un ingrédient par code
 */
router.get('/byId/:code', (req, res, next) => {
    const id = req.params['code'];
    controller.getIngredientById(id, res);
});

/**
 * Récupérer tous les codes existants en bdd
 */
router.get('/allIds', (req, res, next) => {
    controller.getAllIds(res);
});

/**
 * Récupérer la liste des allergènes
 */
router.get('/allergenes',(req, res, next) => {
    controller.getAllergenes(res);
});

/**
 * Récupérer les ingrédients d'une catégorie donnée
 */
router.get('/byCategorie/:id_categorie', (req, res, next) => {
    const id = req.params['id_categorie'];
    controller.getByCategorie(id, res);
});

/**
 * Récupérer un ingrédient par code
 */
router.get('/ingredient/:id_ingredient', (req, res, next) => {
    const id_ingredient = req.params['id_ingredient'];
    controller.getIngredient(id_ingredient, res);
});

/**
 * Récupérer un ingrédient par catégorie et par code
 */
router.get('/byCategorie/:id_categorie/:id_ingredient', (req, res, next) => {
    const id_categorie = req.params['id_categorie'];
    const id_ingredient = req.params['id_ingredient'];
    controller.getIngredientByCategorie(id_categorie, id_ingredient, res);
});

/**
 * Récupérer les allergènes d'une catégorie d'allergènes donnée
 */
router.get('/allergenes/byCategorie/:id_categorie_allergene', (req, res, next) => {
    const id = req.params['id_categorie_allergene'];
    controller.getAllergenesByCategorie(id, res);
});

/**
 * Récupérer un allergene dans une catégorie
 */
router.get('/allergenes/byCategorie/:id_categorie_allergene/:id_ingredient', (req, res, next) => {
    const id_categorie = req.params['id_categorie_allergene'];
    const id_ingredient = req.params['id_ingredient'];
    controller.getAllergeneByCategorie(id_categorie, id_ingredient, res);
});

/**
 * Rechercher les ingrédients par libellé
 */
router.get('/search/byWord/:word', (req, res, next) => {
    const search = req.params['word'];
    controller.searchIngredients(search, res);
});

/**
 * Rechercher un ingrédient par libellé et catégorie
 */
router.get('/search/byWord/:word/byCategorie/:id_categorie', (req, res, next) => {
    const search = req.params['word'];
    const id = req.params['id_categorie'];
    controller.searchIngredientsByCategorie(search, id, res);
});

/**
 * Rechercher un ingrédient par libellé et catégorie d'allergène
 */
router.get('/search/byWord/:word/byCategorieAllergene/:id_categorie_allergene', (req, res, next) => {
    const search = req.params['word'];
    const id = req.params['id_categorie_allergene'];
    controller.searchIngredientsByCategorieAllergene(search, id, res);
});

/** POST **/

/**
 * Créer un ingrédient
 */
router.post('/create', (req, res, next) => {
    controller.createIngredient(req, res);
});

/** PUT **/

/**
 * Modifier un ingrédient
 */
router.put('/modify/:id_ingredient',(req, res, next) => {
    const id_ingredient = req.params['id_ingredient'];
    controller.modifyIngredient(id_ingredient, req, res);
});

/** STOCK INGREDIENT **/

/**
 * Récupérer tous les stocks des ingrédients
 */
router.get('/stocks', (req, res, next) => {
    controller.getAllStocks(res);
});

/**
 * Récupérer tous les stocks des ingrédients pour une catégorie donnée
 */
router.get('/stocks/byCategorie/:id_categorie', (req, res, next) => {
    const id = req.params['id_categorie'];
    controller.getStocksByCategorie(id, res);
});

/**
 * Modifier les stocks d'un ingrédient
 */
router.put('/stocks/modify/:code', (req, res, next) => {
    const code = req.params['code'];
    controller.modifyStock(code, req, res);
});

/**
 * Supprimer un ingrédient
 */
router.delete('/delete/:code', (req, res, next) => {
    const code = req.params['code'];
    controller.deleteIngredient(code, res);
});

module.exports = router;