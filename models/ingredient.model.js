const db = require('../database/generic_functions');
const table = 'ingredient';
const primaryKey = 'code';

/** GET **/

/**
 * Récupérer tous les ingrédients
 * @param {*} res 
 */
exports.getAllIngredients = (res) => {
    db.queryAll(table, (result) => {
        res.status(200).send(result);
    });
};

/**
 * Récupérer un ingrédient par code
 * @param {*} code 
 * @param {*} res 
 */
exports.getIngredientById = (code, res) => {
    db.queryData(`
        SELECT ingredient.*, categorie.categorie, categorie_allergenes.categorie_allergene
        FROM ingredient
        JOIN categorie ON categorie.id_categorie = ingredient.id_categorie
        LEFT OUTER JOIN categorie_allergenes ON categorie_allergenes.id_categorie_allergene = ingredient.id_categorie_allergene
        WHERE ingredient.code=${code}`, 
    (result) => {
        res.status(200).send(result);
    });
};

/**
 * Récupérer tous les codes existants en bdd
 * @param {*} res 
 */
exports.getAllIds = (res) => {
    db.queryData(`SELECT code FROM ${table}`, (result) => {
        res.status(200).send(result);
    });
};

/**
 * Récupérer la liste des allergènes
 * @param {*} res 
 */
exports.getAllergenes = (res) => {
    db.queryData(`SELECT * FROM ${table} WHERE allergene=true`, (result) => {
        res.status(200).send(result);
    });
};

/**
 * Récupérer les ingrédients d'une catégorie donnée
 * @param {*} id 
 * @param {*} res 
 */
exports.getByCategorie = (id, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE id_categorie = ${id}`, (result) => {
        res.status(200).send(result);
    });
};

/**
 * Récupérer un ingrédient par code
 * @param {*} id_ingredient 
 * @param {*} res 
 */
exports.getIngredient = (id_ingredient, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE ${primaryKey} = ${id_ingredient}`, (result) => {
        res.status(200).send(result);
    });
};

/**
 * Récupérer un ingrédient par catégorie et par code
 * @param {*} id_categorie 
 * @param {*} id_ingredient 
 * @param {*} res 
 */
exports.getIngredientByCategorie = (id_categorie, id_ingredient, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE id_categorie = ${id_categorie} AND ${primaryKey} = ${id_ingredient} ORDER BY ${primaryKey}`, (result) => {
        res.status(200).send(result);
    });
};

/**
 * Récupérer les allergènes d'une catégorie d'allergènes donnée
 * @param {*} id 
 * @param {*} res 
 */
exports.getAllergenesByCategorie = (id, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE id_categorie_allergene = ${id}`, (result) => {
        res.status(200).send(result);
    });
};

/**
 * Récupérer un allergene dans une catégorie
 * @param {*} id_categorie 
 * @param {*} id_ingredient 
 * @param {*} res 
 */
exports.getAllergeneByCategorie = (id_categorie, id_ingredient, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE id_categorie_allergene = ${id_categorie} AND ${primaryKey} = ${id_ingredient} ORDER BY ${primaryKey}`, (result) => {
        res.status(200).send(result);
    });
};

/** SEARCH **/

/**
 * Rechercher les ingrédients par libellé
 * @param {*} search 
 * @param {*} res 
 */
exports.searchIngredients = (search, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE LOWER(libelle) LIKE LOWER('%${search}%') ORDER BY ${primaryKey} ASC`, (result) => {
        res.status(200).send(result);
    });
};

/**
 * Rechercher un ingrédient par libellé et catégorie
 * @param {*} search 
 * @param {*} id_categorie 
 * @param {*} res 
 */
exports.searchIngredientsByCategorie = (search, id_categorie, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE LOWER(libelle) LIKE LOWER('%${search}%') AND id_categorie=${id_categorie} ORDER BY ${primaryKey} ASC`, (result) => {
        res.status(200).send(result);
    });
};

/**
 * Rechercher un ingrédient par libellé et catégorie d'allergène
 * @param {*} search 
 * @param {*} id_categorie_allergene 
 * @param {*} res 
 */
exports.searchIngredientsByCategorieAllergene = (search, id_categorie_allergene, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE LOWER(libelle) LIKE LOWER('%${search}%') AND id_categorie_allergene=${id_categorie_allergene} ORDER BY ${primaryKey} ASC`, (result) => {
        res.status(200).send(result);
    });
};

/** POST **/

/**
 * Créer un ingrédient
 * @param {*} req 
 * @param {*} res 
 */
exports.createIngredient = (req, res) => {
    db.insertValue(table, req.body, (result) => {
        res.status(200).send(result);
    });
};

/** PUT **/

/**
 * Modifier un ingrédient
 * @param {*} id_ingredient 
 * @param {*} req 
 * @param {*} res 
 */
exports.modifyIngredient = (id_ingredient, req, res) => {
    db.queryData(`UPDATE ${table} SET libelle='${req.body.libelle}',unite='${req.body.unite}',prix_unitaire=${req.body.prix_unitaire},stock=${req.body.stock},allergene=${req.body.allergene},id_categorie=${req.body.id_categorie},id_categorie_allergene=${req.body.id_categorie_allergene} WHERE ${primaryKey}=${id_ingredient}`, (result) => {
        res.status(200).send(result);
    });
};

/** DELETE **/

/**
 * Supprimer un ingrédient
 * @param {*} code 
 * @param {*} res 
 */
exports.deleteIngredient = (code, res) => {
    db.deleteValue(table, primaryKey, code, (result) => {
        res.status(200).send(result);
    });
};

/** STOCK INGREDIENT **/

/**
 * Récupérer tous les stocks des ingrédients
 * @param {*} res 
 */
exports.getAllStocks = (res) => {
    db.queryData(`SELECT ${primaryKey}, libelle, stock, id_categorie FROM ${table}`, (result) => {
        res.status(200).send(result);
    });
};

/**
 * Récupérer tous les stocks des ingrédients pour une catégorie donnée
 * @param {*} id_categorie 
 * @param {*} res 
 */
exports.getStocksByCategorie = (id_categorie, res) => {
    db.queryData(`SELECT ${primaryKey}, libelle, stock, id_categorie FROM ${table} WHERE id_categorie = ${id_categorie}`, (result) => {
        res.status(200).send(result);
    });
};

/**
 * Modifier les stocks d'un ingrédient
 * @param {*} code 
 * @param {*} req 
 * @param {*} res 
 */
exports.modifyStock = (code, req, res) => {
    db.queryData(`UPDATE ${table} SET stock=${req.body.stock} WHERE ${primaryKey}=${code}`, (result) => {
        res.status(200).send(result);
    });
};