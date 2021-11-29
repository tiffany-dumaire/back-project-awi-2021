const express = require('express');
const router = express.Router();
const controller = require('../controllers/fiche_technique.controller');

router.get('/all', (req,res,next) => {
    controller.getAllFichesTechniques(res);
});

router.get('/infos/:id_fiche_technique', (req, res, next) => {
    const id = req.params['id_fiche_technique'];
    controller.getInfosFiche(id, res);
});

router.get('/byCategorie/:id_categorie_fiche', (req, res, next) => {
    const id = req.params['id_categorie_fiche'];
    controller.getByCategorie(id, res);
});

router.get('/denrees/:id_fiche_technique', (req, res, next) => {
    const id = req.params['id_fiche_technique'];
    controller.getIngredientsByFT(id, res);
});
module.exports = router;