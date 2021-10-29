const express = require('express');
const router = express.Router();
const controller = require('../controllers/categorie_allergenes.controller');

router.get('/all', (req,res,next) => {
    controller.getAllCategoriesAllergenes(res);
});

module.exports = router;