const express = require('express');
const router = express.Router();
const controller = require('../controllers/fiche_technique.controller');

router.get('/all', (req, res, next) => {
    controller.getAllFichesTechniques(res);
});

router.get('/byId/:id_fiche_technique', (req, res, next) => {
    const id = req.params['id_fiche_technique'];
    controller.getFiche(id, res);
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

router.get('/detail/:id_fiche_technique', (req, res, next) => {
    const id = req.params['id_fiche_technique'];
    controller.getDetailFT(id, res);
});

router.get('/etiquette/:id_fiche_technique', (req, res, next) => {
    const id = req.params['id_fiche_technique'];
    controller.etiquetteFiche(id, res);
});

router.get('/etiquettes', (req, res, next) => {
    controller.etiquettesFiches(res);
});

/** POST **/

router.post('/create', (req, res, next) => {
    controller.createFT(req, res);
});

/** PUT **/

router.put('/modify/:id_fiche_technique', (req, res, next) => {
    const id = req.params['id_fiche_technique'];
    controller.modifyFT(id, req, res);
});

/** DELETE **/

router.delete('/delete/:id_fiche_technique', (req, res, next) => {
    const id = req.params['id_fiche_technique'];
    controller.deleteFT(id, res);
});

module.exports = router;
