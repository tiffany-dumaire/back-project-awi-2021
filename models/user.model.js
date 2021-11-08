const db = require('../database/generic_functions');
const table = 'user';
const primaryKey = 'user_id';

exports.getAllUsers = (res) => {
    db.queryAll('user', (result) => {
        res.status(200).send(result);
    });
}

exports.getUserById = (id,res) => {
    db.queryData(`SELECT * FROM ${table} WHERE ${primaryKey} = ${id}`, (result) => {
        res.status(200).send(result);
    });
}

exports.getUserByEmail = (email,res) => {
    db.queryData(`SELECT * FROM ${table} WHERE user_email = '${email}'`, (result) => {
       return result[0]; //res.json().req.body
    });
}

exports.createUser = (pwd,req,res) => {
    db.queryData(`INSERT INTO user (user_email,prenom,nom,password) VALUES ('${req.body.user_email}','${req.body.prenom}','${req.body.nom}','${pwd}')`, (result) => {
        res.send(result);
    });
}