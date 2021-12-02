const db = require('../database/generic_functions');
const table = 'ingredient';
const primaryKey = 'code';

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

exports.getIngredientByCategorie = (id_categorie,id_ingredient, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE id_categorie = ${id_categorie} AND ${primaryKey} = ${id_ingredient} ORDER BY ${primaryKey}`, (result) => {
        res.status(200).send(result);
    });
}

exports.getAllergenesByCategorie = (id, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE id_categorie_allergene = ${id}`, (result) => {
        res.status(200).send(result);
    });
}

exports.getAllergeneByCategorie = (id_categorie,id_ingredient, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE id_categorie_allergene = ${id_categorie} AND ${primaryKey} = ${id_ingredient} ORDER BY ${primaryKey}`, (result) => {
        res.status(200).send(result);
    });
}

exports.searchIngredients = (search, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE libelle LIKE '%${search}%' ORDER BY ${primaryKey} ASC`, (result) => {
        res.status(200).send(result);
    });
}

exports.searchIngredientsByCategorie = (search, id_categorie,res) => {
    db.queryData(`SELECT * FROM ${table} WHERE libelle LIKE '%${search}%' AND id_categorie=${id_categorie} ORDER BY ${primaryKey} ASC`, (result) => {
        res.status(200).send(result);
    });
}

exports.searchIngredientsByCategorieAllergene = (search, id_categorie_allergene, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE libelle LIKE '%${search}%' AND id_categorie_allergene=${id_categorie_allergene} ORDER BY ${primaryKey} ASC`, (result) => {
        res.status(200).send(result);
    });
}

exports.createIngredient = (req,res) => {
    db.insertValue(table, req.body, (result) => {
        res.status(200).send(result);
    });
}

exports.modifyIngredient = (id_ingredient,req, res) => {
    db.queryData(`UPDATE ${table} SET libelle='${req.body.libelle}',unite='${req.body.unite}',prix_unitaire=${req.body.prix_unitaire},stock=${req.body.stock},allergene=${req.body.allergene},id_categorie=${req.body.id_categorie},id_categorie_allergene=${req.body.id_categorie_allergene} WHERE ${primaryKey}=${id_ingredient}`, (result) => {
        res.status(200).send(result);
    });
}
