const db = require('../database/dbConfig');
const table = 'user';
const primaryKey = 'user_id';
const User = require('../model/user.model');

exports.getAllUsers = (res) => {
    db.queryAll('user',(result) => {
        res.status(200).send(result);
    });
}

exports.getUserById = (id,res) => {
    db.queryData(`SELECT * FROM ${table} WHERE ${primaryKey} = ${id}`,(result) => {
        res.status(200).send(result);
    });
}

exports.getUserByEmail = (email, pwd, res) => {
    db.queryData(`SELECT * FROM ${table} WHERE user_email = '${email}'`, (result) => {

        res.status(200).send(result);
    });
}

exports.createUser = async (pwd,req,res) => {
    db.queryData(`INSERT INTO user (user_email,prenom,nom,password) VALUES ('${req.body.user_email}','${req.body.prenom}','${req.body.nom}','${pwd}')`, (result) => {
        res.status(200).send(res.req.body);
    });
}