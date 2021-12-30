const db = require('../database/generic_functions');
const table = 'ingredient';
const primaryKey = 'code';

/** GET **/

exports.getAllIngredients = (res) => {
    db.queryAll(table, (result) => {
        res.status(200).send(result);
    });
}

exports.getAllIds = (res) => {
    db.queryData(`SELECT code FROM ${table}`, (result) => {
        res.status(200).send(result);
    });
}

exports.getAllergenes = (res) => {
    db.queryData(`SELECT * FROM ${table} WHERE allergene=true`, (result) => {
        res.status(200).send(result);
    })
}

exports.getByCategorie = (id, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE id_categorie = ${id}`, (result) => {
        res.status(200).send(result);
    });
}

exports.getIngredient = (id_ingredient, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE ${primaryKey} = ${id_ingredient}`, (result) => {
        res.status(200).send(result);
    });
}

exports.getIngredientByCategorie = (id_categorie, id_ingredient, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE id_categorie = ${id_categorie} AND ${primaryKey} = ${id_ingredient} ORDER BY ${primaryKey}`, (result) => {
        res.status(200).send(result);
    });
}

exports.getAllergenesByCategorie = (id, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE id_categorie_allergene = ${id}`, (result) => {
        res.status(200).send(result);
    });
}

exports.getAllergeneByCategorie = (id_categorie, id_ingredient, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE id_categorie_allergene = ${id_categorie} AND ${primaryKey} = ${id_ingredient} ORDER BY ${primaryKey}`, (result) => {
        res.status(200).send(result);
    });
}

/** SEARCH **/

exports.searchIngredients = (search, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE LOWER(libelle) LIKE LOWER('%${search}%') ORDER BY ${primaryKey} ASC`, (result) => {
        res.status(200).send(result);
    });
}

exports.searchIngredientsByCategorie = (search, id_categorie, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE LOWER(libelle) LIKE LOWER('%${search}%') AND id_categorie=${id_categorie} ORDER BY ${primaryKey} ASC`, (result) => {
        res.status(200).send(result);
    });
}

exports.searchIngredientsByCategorieAllergene = (search, id_categorie_allergene, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE LOWER(libelle) LIKE LOWER('%${search}%') AND id_categorie_allergene=${id_categorie_allergene} ORDER BY ${primaryKey} ASC`, (result) => {
        res.status(200).send(result);
    });
}

/** POST **/

exports.createIngredient = (req, res) => {
    db.insertValue(table, req.body, (result) => {
        res.status(200).send(result);
    });
}

/** PUT **/

exports.modifyIngredient = (id_ingredient, req, res) => {
    db.queryData(`UPDATE ${table} SET libelle='${req.body.libelle}',unite='${req.body.unite}',prix_unitaire=${req.body.prix_unitaire},stock=${req.body.stock},allergene=${req.body.allergene},id_categorie=${req.body.id_categorie},id_categorie_allergene=${req.body.id_categorie_allergene} WHERE ${primaryKey}=${id_ingredient}`, (result) => {
        res.status(200).send(result);
    });
}

/** DELETE **/

exports.deleteIngredient = (code, res) => {
    db.deleteValue(table, primaryKey, code, (result) => {
        res.status(200).send(result);
    });
}

/** STOCK INGREDIENT **/

exports.getAllStocks = (res) => {
    db.queryData(`SELECT ${primaryKey}, libelle, stock, id_categorie FROM ${table}`, (result) => {
        res.status(200).send(result);
    });
}

exports.getStocksByCategorie = (id_categorie, res) => {
    db.queryData(`SELECT ${primaryKey}, libelle, stock, id_categorie FROM ${table} WHERE id_categorie = ${id_categorie}`, (result) => {
        res.status(200).send(result);
    });
}

exports.modifyStock = (code, req, res) => {
    db.queryData(`UPDATE ${table} SET stock=${req.body.stock} WHERE ${primaryKey}=${code}`, (result) => {
        res.status(200).send(result);
    });
}