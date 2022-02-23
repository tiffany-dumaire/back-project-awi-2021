const model = require('../models/fiche_technique.model');

/**
 * Récupérer toutes les fiches techniques
 * @param {*} res 
 */
exports.getAllFichesTechniques = (res) => {
    model.getAllFichesTechniques(res);
}

/**
 * Récupération de toutes les fiches en détail (ajout pour l'appli mobile)
 * @param {*} res 
 */
exports.getAllDetailsFichesTechniques = (res) => {
    model.getAllDetailsFichesTechniques(res);
}

/**
 * Récupérer les infos d'une fiche technique
 * @param {*} id_fiche_technique 
 * @param {*} res 
 */
exports.getFiche = (id_fiche_technique, res) => {
    model.getFiche(id_fiche_technique, res);
}

/**
 * Récupérer les infos complètes d'une fiche technique
 * @param {*} id 
 * @param {*} res 
 */
exports.getInfosFiche = (id, res) => { 
    model.getInfosFiche(id, res);
}

/**
 * Récupérer les fiches par catégorie de fiches techniques
 * @param {*} id 
 * @param {*} res 
 */
exports.getByCategorie = (id, res) => {
    model.getByCategorie(id, res);
}

/**
 * Récupérer les ingrédients d'une fiche technique
 * @param {*} id_fiche_technique 
 * @param {*} res 
 */
exports.getIngredientsByFT = (id_fiche_technique, res) => {
    model.getIngredientsByFT(id_fiche_technique, res);
}

/**
 * Récupérer les phases d'une fiche technique
 * @param {*} id_fiche_technique 
 * @param {*} res 
 */
exports.getPhasesByFT = (id_fiche_technique, res) => {
    model.getPhasesByFT(id_fiche_technique, res);
}

/**
 * Récupérer les ingrédients par ordre de phases dans la fiche technique
 * @param {*} id_fiche_technique 
 * @param {*} ordre 
 * @param {*} res 
 */
exports.getDenreesByFTAndOrdre = (id_fiche_technique, ordre, res) => {
    model.getDenreesByFTAndOrdre(id_fiche_technique, ordre, res);
}

/**
 * Rechercher une fiche technique par nom d'ingrédient
 * @param {*} search 
 * @param {*} res 
 */
exports.searchFTsByIngredients = (search, res) => {
    model.searchFTsByIngredients(search, res);
}

/**
 * Rechercher une fiche technique par nom d'ingrédient et catégorie de fiche
 * @param {*} search 
 * @param {*} id_categorie_fiche 
 * @param {*} res 
 */
exports.searchFTsByIngredientsAndCategorie = (search, id_categorie_fiche, res) => {
    model.searchFTsByIngredientsAndCategorie(search, id_categorie_fiche, res);
}

/**
 * Rechercher une fiche technique par nom de fiche technique
 * @param {*} search 
 * @param {*} res 
 */
exports.searchFTsByLibelle = (search, res) => {
    model.searchFTsByLibelle(search, res);
}

/**
 * Rechercher une fiche technique par nom de fiche technique et catégorie de fiche
 * @param {*} search 
 * @param {*} id_categorie_fiche 
 * @param {*} res 
 */
exports.searchFTsByLibelleAndCategorie = (search, id_categorie_fiche, res) => {
    model.searchFTsByLibelleAndCategorie(search, id_categorie_fiche, res);
}

/**
 * Récupérer le détail complet d'une fiche technique
 * @param {*} id_fiche_technique 
 * @param {*} res 
 */
exports.getDetailFT = (id_fiche_technique, res) => {
    model.getDetailFT(id_fiche_technique, res);
}

/**
 * Récupérer l'étiquette d'une fiche technique
 * @param {*} id_fiche_technique 
 * @param {*} res 
 */
exports.etiquetteFiche = (id_fiche_technique, res) => {
    model.etiquetteFiche(id_fiche_technique, res);
}

/**
 * Récupérer toutes les étiquettes
 * @param {*} res 
 */
exports.etiquettesFiches = (res) => {
    model.etiquettesFiches(res);
}

/** POST **/

/**
 * Créer une fiche technique
 * @param {*} req 
 * @param {*} res 
 */
exports.createFT = (req, res) => {
    model.createFT(req, res);
}

/** PUT **/

/**
 * Modifier une fiche technique
 * @param {*} id_fiche_technique 
 * @param {*} req 
 * @param {*} res 
 */
exports.modifyFT = (id_fiche_technique, req, res) => {
    model.modifyFT(id_fiche_technique, req, res);
}

/** DELETE **/

/**
 * Supprimer une fiche technique
 * @param {*} id_fiche_technique 
 * @param {*} res 
 */
exports.deleteFT = (id_fiche_technique, res) => {
    model.deleteFT(id_fiche_technique, res);
}