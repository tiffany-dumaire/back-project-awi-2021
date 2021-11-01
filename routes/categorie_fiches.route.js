const express = require('express');
const router = express.Router();
const controller = require('../controllers/categorie_fiches.controller');

router.get('/all', (req,res,next) => {
    controller.getAllCategoriesFiches(res);
});

module.exports = router;