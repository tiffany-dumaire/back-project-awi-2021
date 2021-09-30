const db = require('../models');
const config = require('../database/authConfig');
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.signup = (req,res) => {
    User.create({
        username: req.body.username,
        user_email: req.body.user_email,
        password: bcrypt.hashSync(req.body.password, 8)
    }).then(user => {
        if (req.body.roles) {
            Role.findAll({
                where: {
                    name: {
                        [Op.or]: req.body.roles
                    }
                }
            }).then(roles => {
                user.setRoles(roles).then(() => {
                    res.send({message: "Utilisateur enregistré !"});
                });
            });
        } else {
            user.setRoles([1]).then(() => {
                res.send({message: "Utilisateur enregistré !"});
            });
        }
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

