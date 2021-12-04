const express = require('express');
const router = express.Router();
const controller = require('../controllers/categorie.controller');

router.get('/all', (req, res, next) => {
    controller.getAllCategoriesIngredients(res);
});

router.get('/byID/:id_categorie', (req, res, next) => {
    const id = req.params['id_categorie'];
    controller.getCategorieById(id, res);
})

module.exports = router;
