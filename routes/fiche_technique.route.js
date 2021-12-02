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

router.get('/phases/:id_fiche_technique', (req, res, next) => {
    const id = req.params['id_fiche_technique'];
    controller.getPhasesByFT(id, res);
});

router.get('/denrees/:id_fiche_technique/:ordre', (req, res, next) => {
    const id = req.params['id_fiche_technique'];
    const ordre = req.params['ordre'];
    controller.getDenreesByFTAndOrdre(id, ordre, res);
});

router.get('/search/byIngredients/:word', (req, res, next) => {
    const search = req.params['word'];
    controller.searchFTsByIngredients(search, res);
});

router.get('/search/byIngredients/:word/:id_categorie_fiche', (req, res, next) => {
    const search = req.params['word'];
    const id = req.params['id_categorie_fiche'];
    controller.searchFTsByIngredientsAndCategorie(search, id, res);
});

router.get('/search/byLibelle/:word', (req, res, next) => {
    const search = req.params['word'];
    controller.searchFTsByLibelle(search, res);
});

router.get('/search/byLibelle/:word/:id_categorie_fiche', (req, res, next) => {
    const search = req.params['word'];
    const id = req.params['id_categorie_fiche'];
    controller.searchFTsByLibelleAndCategorie(search, id, res);
});

module.exports = router;
