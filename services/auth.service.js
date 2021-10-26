const userService = require('./user.service');
const bcrypt = require('bcrypt');
const User = require('../model/user.model');

exports.signup = async (req,res) => {
    var pwd = req.body.password;
    const salt = await bcrypt.genSalt(10);
    pwd = await bcrypt.hash(pwd, salt);
    userService.createUser(pwd,req,res);
}

exports.signin = async (req,res) => {
    /* const user = await userService.getUserByEmail(req.body.user_email, res);
    if (user) {
        const validPassword = await bcrypt.compare(req.body.password,user.password);
        if (validPassword) {
            res.status(200).json({ message: "Valid password" });
        } else {
            res.status(400).json({ error: "Mot de passe invalide" });
        }
    } else {
        res.status(401).json({ error: "Cet utilisateur n'existe pas." })
    } */
    try {
        const { user_email, password } = req.body;

        if (!(user_email && password)) {
            res.status(400).send("L'email et le mot de passe sont requis.");
        }

        //let user = new User(1,'','','','','');
        await userService.getUserByEmail(user_email, password, res).then((result) => {
            
        });
        console.log(user);
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { user_id: user._id, user_email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );

            user.token = token;

            res.status(200).json(user);
        }
        res.status(400).send("Identifiants invalides.");
    } catch (err) {
        console.log(err);
    }
}