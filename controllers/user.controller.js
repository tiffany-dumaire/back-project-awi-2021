const service = require('../services/user.service');

exports.getAllUsers = (res) => {
    service.getAllUsers(res);
}

exports.getUserById = (id,res) => {
    service.getUserById(id,res);
}

exports.getUserByEmail = (email,res) => {
    service.getUserByEmail(email,res);
}

exports.createUser = (req,res) => {
    service.createUser(pwd,req,res);
}