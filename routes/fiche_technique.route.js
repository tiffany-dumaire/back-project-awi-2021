const express = require('express');
const router = express.Router();
const controller = require('../controllers/fiche_technique.controller');

router.get('/all', (req,res,next) => {
    controller.getAllFichesTechniques(res);
});

router.get('/byCategorie/:id_categorie_fiche', (req, res, next) => {
    const id = req.params['id_categorie_fiche'];
    controller.getByCategorie(id, res);
});

module.exports = router;