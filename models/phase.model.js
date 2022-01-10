const db = require('../database/generic_functions');
const service = require('../services/phase.service');
const table = 'phase';
const primaryKey = 'id_phase';
const table2 = 'phase_ingredient';
const primaryKey2 = 'id_phase_ingredient';
const table3 = 'phase_FT';
const primaryKey3 = 'id_phase_ft';

/**
 * Récupérer toutes les phases
 * @param {*} res 
 */
exports.getPhases = (res) => {
    db.queryAll(table, (result) => {
        res.status(200).send(result);
    });
};

/**
 * Récupérer les phases d'une fiche technique
 * @param {*} id_fiche_technique 
 * @param {*} res 
 */
exports.getPhaseByFT = (id_fiche_technique, res) => {
    db.queryData(`SELECT p.* 
                  FROM phase p
                  JOIN phase_FT pft ON pft.id_phase = p.id_phase
                  WHERE pft.id_fiche_technique = ${id_fiche_technique}
                  ORDER BY pft.ordre`,
    (result) => {
        res.status(200).send(result);
    });
};

/**
 * Récupérer la phase complète
 * @param {*} id_phase 
 * @param {*} res 
 */
exports.getPhaseComplete = (id_phase, res) => {
    db.queryData(`SELECT p.id_phase, p.libelle_phase, p.libelle_denrees, p.description_phase, p.duree_phase, i.code, i.libelle 
                  FROM phase p
                  LEFT OUTER JOIN phase_ingredient pi ON pi.id_phase = p.id_phase
                  LEFT OUTER JOIN ingredient i ON i.code = pi.code
                  WHERE p.id_phase = ${id_phase}
                  ORDER BY i.libelle ASC`,
    (result) => {
        res.status(200).send(service.phase(result));
    });
};

/**
 * Récupérer les infos d'une phase
 * @param {*} id_phase 
 * @param {*} res 
 */
exports.getPhase = (id_phase, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE ${primaryKey}=${id_phase}`, (result) => {
        res.status(200).send(result);
    });
};

/**
 * Récupérer les denrées d'une phase
 * @param {*} id_phase 
 * @param {*} res 
 */
exports.getDenrees = (id_phase, res) => {
    db.queryData(`SELECT * FROM ingredient i JOIN phase_ingredient pi ON pi.code = i.code WHERE pi.${primaryKey}=${id_phase}`, (result) => {
        res.status(200).send(result);
    });
};

/**
 * Récupérer les ingrédients d'une fiche technique
 * @param {*} id_fiche_technique 
 * @param {*} res 
 */
exports.getPhaseWithIngredients = (id_fiche_technique, res) => {
    db.queryData(`
        SELECT p.id_phase, p.libelle_phase, pi.id_phase_ingredient, i.libelle, qipft.quantite
        FROM phase p
        LEFT OUTER JOIN phase_ingredient pi ON pi.id_phase = p.id_phase
        LEFT OUTER JOIN ingredient i ON i.code = pi.code
        LEFT OUTER JOIN quantity_ingredient_phase_ft qipft ON qipft.id_phase_ingredient = pi.id_phase_ingredient AND qipft.id_fiche_technique = ${id_fiche_technique}
        WHERE p.id_phase IN (
            SELECT pft.id_phase
            FROM phase_FT pft
            WHERE pft.id_fiche_technique = ${id_fiche_technique}
        )
        ORDER BY p.id_phase, i.libelle
    `,
    (result) => {
        res.status(200).send(service.phasesWithIngredients(result));
    });
};

/** POST **/

/**
 * Créer une phase
 * @param {*} req 
 * @param {*} res 
 */
exports.createPhase = (req, res) => {
    db.insertValue(table, req.body, (result) => {
        res.status(200).send(result);
    });
};

/**
 * Ajouter la quantité d'ingrédient d'une phase à une fiche technique
 * @param {*} req 
 * @param {*} res 
 */
exports.postQuantityIngredient = (req, res) => {
    db.insertValue('quantity_ingredient_phase_ft', req.body, (result) => {
        res.status(200).send(result);
    });
};

/**
 * Ajouter un ingrédient à une phase
 * @param {*} req 
 * @param {*} res 
 */
exports.addIngredient = (req, res) => {
    db.insertValue(table2, req.body, (result) => {
        res.status(200).send(result);
    });
};

/**
 * Ajouter une phase et l'ordre dans la fiche technique
 * @param {*} req 
 * @param {*} res 
 */
exports.addOrdrePhaseFT = (req, res) => {
    db.insertValue(table3, req.body, (result) => {
        res.status(200).send(result);
    });
};

/** PUT **/

/**
 * Modifier une phase 
 * @param {*} id 
 * @param {*} req 
 * @param {*} res 
 */
exports.modifyPhase = (id, req, res) => {
    db.queryData(`UPDATE ${table} SET libelle_phase="${req.body.libelle_phase}", libelle_denrees="${req.body.libelle_denrees}", description_phase="${req.body.description_phase}", duree_phase=${req.body.duree_phase} WHERE ${primaryKey}=${id}`, (result) => {
        res.status(200).send(result);
    });
};

/**
 * Modifier une phase et l'ordre dans la fiche technique
 * @param {*} id_phase_ft 
 * @param {*} req 
 * @param {*} res 
 */
 exports.modifyOrdrePhaseFT = (id_phase_ft, req, res) => {
    db.queryData(`UPDATE ${table3} SET ordre=${req.body.ordre} WHERE ${primaryKey3}=${id_phase_ft}`, (result) => {
        res.status(200).send(result);
    });
};

/**
 * Modifier la quantité d'ingrédient d'une phase à une fiche technique
 * @param {*} id_phase_ingredient 
 * @param {*} req 
 * @param {*} res 
 */
 exports.putQuantityIngredient = (id_phase_ingredient, req, res) => {
    db.queryData(`UPDATE quantity_ingredient_phase_ft SET quantite=${req.body.quantite} WHERE id_phase_ingredient=${id_phase_ingredient}`, (result) => {
        res.status(200).send(result);
    });
};

/** DELETE **/

/**
 * Supprimer une phase par id
 * @param {*} id_phase 
 * @param {*} res 
 */
exports.deletePhase = (id_phase, res) => {
    db.deleteValue(table, primaryKey, id_phase, (result) => {
        res.status(200).send(result);
    });
};

/**
 * Retirer un ingrédient d'une phase
 * @param {*} id_phase_ingredient 
 * @param {*} res 
 */
 exports.pullIngredient = (id_phase_ingredient, res) => {
    db.deleteValue(table2, primaryKey2, id_phase_ingredient, (result) => {
        res.status(200).send(result);
    });
};