const express = require('express');
const router = express.Router();
const controller = require('../controllers/ingredient.controller');

router.get('/all', (req, res, next) => {
    controller.getAllIngredients(res);
});

router.get('/allIds', (req, res, next) => {
    controller.getAllIds(res);
});

router.get('/allergenes',(req, res, next) => {
    controller.getAllergenes(res);
});

router.get('/byCategorie/:id_categorie', (req, res, next) => {
    const id = req.params['id_categorie'];
    controller.getByCategorie(id, res);
});

router.get('/ingredient/:id_ingredient', (req, res, next) => {
    const id_ingredient = req.params['id_ingredient'];
    controller.getIngredient(id_ingredient, res);
});

router.get('/byCategorie/:id_categorie/:id_ingredient', (req, res, next) => {
    const id_categorie = req.params['id_categorie'];
    const id_ingredient = req.params['id_ingredient'];
    controller.getIngredientByCategorie(id_categorie,id_ingredient, res);
});

router.get('/allergenes/byCategorie/:id_categorie_allergene', (req, res, next) => {
    const id = req.params['id_categorie_allergene'];
    controller.getAllergenesByCategorie(id, res);
});

router.get('/allergenes/byCategorie/:id_categorie_allergene/:id_ingredient', (req, res, next) => {
    const id_categorie = req.params['id_categorie_allergene'];
    const id_ingredient = req.params['id_ingredient'];
    controller.getAllergeneByCategorie(id_categorie,id_ingredient, res);
});

router.get('/search/byWord/:word', (req, res, next) => {
    const search = req.params['word'];
    controller.searchIngredients(search, res);
});

router.get('/search/byWord/:word/byCategorie/:id_categorie', (req, res, next) => {
    const search = req.params['word'];
    const id = req.params['id_categorie'];
    controller.searchIngredientsByCategorie(search, id, res);
});

router.get('/search/byWord/:word/byCategorieAllergene/:id_categorie_allergene', (req, res, next) => {
    const search = req.params['word'];
    const id = req.params['id_categorie_allergene'];
    controller.searchIngredientsByCategorieAllergene(search, id, res);
});

router.post('/create', (req, res, next) => {
    controller.createIngredient(req,res);
});

router.put('/modify/:id_ingredient',(req,res,next) => {
    const id_ingredient = req.params['id_ingredient'];
    controller.modifyIngredient(id_ingredient,req, res);
});

/** STOCK INGREDIENT **/

router.get('/stocks', (req, res, next) => {
    controller.getAllStocks(res);
});

router.get('/stocks/byCategorie/:id_categorie', (req, res, next) => {
    const id = req.params['id_categorie'];
    controller.getStocksByCategorie(id, res);
});

router.get('/stocks/modify/:code', (req, res, next) => {
    const code = req.params['code'];
    model.modifyStock(code, req, res);
});

module.exports = router;