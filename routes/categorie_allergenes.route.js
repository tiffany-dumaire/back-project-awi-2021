const express = require('express');
const router = express.Router();
const controller = require('../controllers/categorie_allergenes.controller');

router.get('/all', (req,res,next) => {
    controller.getAllCategoriesAllergenes(res);
});

router.get('/byID/:id_categorie_allergene', (req, res, next) => {
    const id = req.params['id_categorie_allergene'];
    controller.getCategorieAllergeneById(id, res);
})

module.exports = router;