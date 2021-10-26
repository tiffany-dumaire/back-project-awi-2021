const model = require('../models/user.model');

exports.getAllUsers = (res) => {
    console.log("controller");
    model.getAllUsers(res);
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
