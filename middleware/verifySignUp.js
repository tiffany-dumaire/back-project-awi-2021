const db = require('../models');
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail = (req,res,next) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Ce nom d'utilisateur est déjà pris."
            });
            return;
        }

        User.findOne({
            where: {
                user_email: req.body.user_email
            }
        }).then(user => {
            if (user) {
                res.status(400).send({
                    message: "Cet email est déjà pris."
                });
                return;
            }

            next();
        });
    });
};

checkRolesExisted = (req,res,next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: "Le role suivant n'existe pas : " + req.body.roles[i]
                });
                return;
            }
        }
    }
    next();
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
    checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;