const express = require('express');
const router = express.Router();
const controller = require('../controllers/categorie.controller');

router.get('/all', (req,res,next) => {
    controller.getAllCategoriesIngredients(res);
});

module.exports = router;
