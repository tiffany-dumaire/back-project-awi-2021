const express = require('express');
const router = express.Router();
const controller = require('../controllers/ingredient.controller');

router.get('/all', (req,res,next) => {
    controller.getAllIngredients(res);
});

router.get('/allergenes',(req,res,next) => {
    controller.getAllergenes(res);
});

router.get('/byCategorie/:id_categorie', (req,res,next) => {
    const id = req.params['id_categorie'];
    controller.getByCategorie(id,res);
});

router.post('/create',(req,res,next) => {
    controller.createUser(req, res);
});


module.exports = router;