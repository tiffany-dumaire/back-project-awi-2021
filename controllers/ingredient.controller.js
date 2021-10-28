const model = require('../models/ingredient.model');

exports.getAllIngredients = (res) => {
    model.getAllIngredients(res);
}

exports.getUserById = (id,res) => {
    model.getUserById(id,res);
}

exports.getUserByEmail = (email,res) => {
    model.getUserByEmail(email,res);
}

exports.createUser = (req,res) => {
    model.createUser(pwd,req,res);
}