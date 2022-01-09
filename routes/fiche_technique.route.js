const express = require('express');
const router = express.Router();
const controller = require('../controllers/fiche_technique.controller');

/**
 * Récupérer toutes les fiches techniques
 */
router.get('/all', (req, res, next) => {
    controller.getAllFichesTechniques(res);
});

/**
 * Récupérer les infos d'une fiche technique
 */
router.get('/byId/:id_fiche_technique', (req, res, next) => {
    const id = req.params['id_fiche_technique'];
    controller.getFiche(id, res);
});

/**
 * Récupérer les infos complètes d'une fiche technique
 */
router.get('/infos/:id_fiche_technique', (req, res, next) => {
    const id = req.params['id_fiche_technique'];
    controller.getInfosFiche(id, res);
});

/**
 * Récupérer les fiches par catégorie de fiches techniques
 */
router.get('/byCategorie/:id_categorie_fiche', (req, res, next) => {
    const id = req.params['id_categorie_fiche'];
    controller.getByCategorie(id, res);
});

/**
 * Récupérer les ingrédients d'une fiche technique
 */
router.get('/denrees/:id_fiche_technique', (req, res, next) => {
    const id = req.params['id_fiche_technique'];
    controller.getIngredientsByFT(id, res);
});

/**
 * Récupérer les phases d'une fiche technique
 */
router.get('/phases/:id_fiche_technique', (req, res, next) => {
    const id = req.params['id_fiche_technique'];
    controller.getPhasesByFT(id, res);
});

/**
 * Récupérer les ingrédients par ordre de phases dans la fiche technique
 */
router.get('/denrees/:id_fiche_technique/:ordre', (req, res, next) => {
    const id = req.params['id_fiche_technique'];
    const ordre = req.params['ordre'];
    controller.getDenreesByFTAndOrdre(id, ordre, res);
});

/**
 * Rechercher une fiche technique par nom d'ingrédient
 */
router.get('/search/byIngredients/:word', (req, res, next) => {
    const search = req.params['word'];
    controller.searchFTsByIngredients(search, res);
});

/**
 * Rechercher une fiche technique par nom d'ingrédient et catégorie de fiche
 */
router.get('/search/byIngredients/:word/:id_categorie_fiche', (req, res, next) => {
    const search = req.params['word'];
    const id = req.params['id_categorie_fiche'];
    controller.searchFTsByIngredientsAndCategorie(search, id, res);
});

/**
 * Rechercher une fiche technique par nom de fiche technique
 */
router.get('/search/byLibelle/:word', (req, res, next) => {
    const search = req.params['word'];
    controller.searchFTsByLibelle(search, res);
});

/**
 * Rechercher une fiche technique par nom de fiche technique et catégorie de fiche
 */
router.get('/search/byLibelle/:word/:id_categorie_fiche', (req, res, next) => {
    const search = req.params['word'];
    const id = req.params['id_categorie_fiche'];
    controller.searchFTsByLibelleAndCategorie(search, id, res);
});

/**
 * Récupérer le détail complet d'une fiche technique
 */
router.get('/detail/:id_fiche_technique', (req, res, next) => {
    const id = req.params['id_fiche_technique'];
    controller.getDetailFT(id, res);
});

/**
 * Récupérer l'étiquette d'une fiche technique
 */
router.get('/etiquette/:id_fiche_technique', (req, res, next) => {
    const id = req.params['id_fiche_technique'];
    controller.etiquetteFiche(id, res);
});

/**
 * Récupérer toutes les étiquettes
 */
router.get('/etiquettes', (req, res, next) => {
    controller.etiquettesFiches(res);
});

/** POST **/

/**
 * Créer une fiche technique
 */
router.post('/create', (req, res, next) => {
    controller.createFT(req, res);
});

/** PUT **/

/**
 * Modifier une fiche technique
 */
router.put('/modify/:id_fiche_technique', (req, res, next) => {
    const id = req.params['id_fiche_technique'];
    controller.modifyFT(id, req, res);
});

/** DELETE **/

/**
 * Supprimer une fiche technique
 */
router.delete('/delete/:id_fiche_technique', (req, res, next) => {
    const id = req.params['id_fiche_technique'];
    controller.deleteFT(id, res);
});

module.exports = router;
