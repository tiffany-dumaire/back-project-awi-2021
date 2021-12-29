const db = require('../database/generic_functions');
const table = 'fiche_technique';
const primaryKey = 'id_fiche_technique'

exports.getAllFichesTechniques = (res) => {
    db.queryData(`SELECT ${table}.*, responsable.intitule_responsable 
                  FROM ${table}  
                  JOIN responsable ON responsable.id_responsable = ${table}.id_responsable`, 
    (result) => {
        res.status(200).send(result);
    });
}

exports.getInfosFiche = (id, res) => {
    db.queryData(`SELECT ${table}.*, responsable.intitule_responsable, categorie_fiches.categorie_fiche 
                  FROM ${table} 
                  JOIN categorie_fiches ON categorie_fiches.id_categorie_fiche = ${table}.id_categorie_fiche 
                  JOIN responsable ON responsable.id_responsable = ${table}.id_responsable 
                  WHERE ${primaryKey} = ${id}`, 
    (result) => {
        res.status(200).send(result);
    });
}

exports.getByCategorie = (id, res) => {
    db.queryData(`SELECT ${table}.*, responsable.intitule_responsable FROM ${table} JOIN responsable ON responsable.id_responsable = ${table}.id_responsable WHERE id_categorie_fiche = ${id}`, (result) => {
        res.status(200).send(result);
    });
}

exports.getIngredientsByFT = (id_fiche_technique, res) => {
    db.queryData(`SELECT pft.ordre, i.code, i.libelle, i.unite, qipft.quantite
                  FROM phase_FT pft
                  JOIN phase_ingredient pi ON pi.id_phase = pft.id_phase
                  JOIN quantity_ingredient_phase_ft qipft ON qipft.id_phase_ingredient = pi.id_phase_ingredient
                  JOIN ingredient i ON i.code = pi.code
                  WHERE pft.${primaryKey} = ${id_fiche_technique}
                  ORDER BY ordre ASC, code ASC`, 
    (result) => {
        res.status(200).send(result);
    });
}

exports.getPhasesByFT = (id_fiche_technique, res) => {
    db.queryData(`SELECT phase.*, phase_FT.ordre
                  FROM phase
                  JOIN phase_FT ON phase.id_phase = phase_FT.id_phase
                  WHERE phase_FT.${primaryKey} = ${id_fiche_technique}
                  ORDER BY phase_FT.ordre`,
    (result) => {
        res.status(200).send(result);
    });
}

exports.getDenreesByFTAndOrdre = (id_fiche_technique, ordre, res) => {
    db.queryData(`SELECT ingredient.code, ingredient.libelle, quantity_ingredient_phase_ft.quantite, ingredient.unite, ingredient.prix_unitaire, ingredient.allergene  
                  FROM phase_ingredient
                  JOIN ingredient ON ingredient.code = phase_ingredient.code
                  JOIN phase ON phase.id_phase = phase_ingredient.id_phase
                  JOIN phase_FT ON phase_FT.id_phase = phase.id_phase
                  JOIN quantity_ingredient_phase_ft ON quantity_ingredient_phase_ft.id_phase_ingredient = phase_ingredient.id_phase_ingredient
                  WHERE phase_FT.${primaryKey} = ${id_fiche_technique} AND quantity_ingredient_phase_ft.${primaryKey} = ${id_fiche_technique} AND ordre = ${ordre};`, 
    (result) => {
        res.status(200).send(result)
    });
}

exports.searchFTsByIngredients = (search, res) => {
    db.queryData(`SELECT DISTINCT ${table}.*, responsable.intitule_responsable
                  FROM ${table}
                  JOIN responsable ON responsable.id_responsable = ${table}.id_responsable
                  JOIN phase_FT ON phase_FT.${primaryKey} = ${table}.${primaryKey}
                  JOIN phase_ingredient ON phase_ingredient.id_phase = phase_FT.id_phase
                  JOIN ingredient ON ingredient.code = phase_ingredient.code
                  WHERE ingredient.libelle LIKE '%${search}%' 
                  ORDER BY ${table}.${primaryKey} ASC`, 
    (result) => {
        res.status(200).send(result);
    });
}

exports.searchFTsByIngredientsAndCategorie = (search, id_categorie_fiche, res) => {
    db.queryData(`SELECT DISTINCT ${table}.*, responsable.intitule_responsable
                  FROM ${table}
                  JOIN responsable ON responsable.id_responsable = ${table}.id_responsable
                  JOIN phase_FT ON phase_FT.${primaryKey} = ${table}.${primaryKey}
                  JOIN phase_ingredient ON phase_ingredient.id_phase = phase_FT.id_phase
                  JOIN ingredient ON ingredient.code = phase_ingredient.code
                  WHERE ingredient.libelle LIKE '%${search}%' 
                  AND ${table}.id_categorie_fiche = ${id_categorie_fiche}
                  ORDER BY ${table}.${primaryKey} ASC`, 
    (result) => {
        res.status(200).send(result);
    });
}

exports.searchFTsByLibelle = (search, res) => {
    db.queryData(`SELECT DISTINCT ${table}.*, responsable.intitule_responsable
                  FROM ${table}
                  JOIN responsable ON responsable.id_responsable = ${table}.id_responsable
                  WHERE ${table}.libelle_fiche_technique LIKE '%${search}%' 
                  ORDER BY ${table}.${primaryKey} ASC`, 
    (result) => {
        res.status(200).send(result);
    });
}

exports.searchFTsByLibelleAndCategorie = (search, id_categorie_fiche, res) => {
    db.queryData(`SELECT DISTINCT ${table}.*, responsable.intitule_responsable
                  FROM ${table}
                  JOIN responsable ON responsable.id_responsable = ${table}.id_responsable
                  WHERE ${table}.libelle_fiche_technique LIKE '%${search}%' 
                  AND ${table}.id_categorie_fiche = ${id_categorie_fiche}
                  ORDER BY ${table}.${primaryKey} ASC`, 
    (result) => {
        res.status(200).send(result);
    });
}

exports.createFT = (req, res) => {
    db.insertValue(table, req.body, (result) => {
        res.status(200).send(result);
    });
}