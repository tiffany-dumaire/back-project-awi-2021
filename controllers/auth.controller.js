const service = require('../services/auth.service');

exports.signup = (req,res) => {
    service.signup(req,res);
}

exports.signin = (req,res) => {
    service.signin(req,res);
}