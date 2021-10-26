const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth.controller');

router.post('/signup', (req,res,next) => {
    const body = req.body;
    if (!(body.prenom && body.nom && body.user_email && body.password)) {
      return res.status(400).send({ error: "Il manque des données, vous devez avoir : nom, prenom, user_email, password." });
    }
    controller.signup(req,res);
});

router.post('/login',(req,res,next) => {
    const body = req.body;
    if (!(body.user_email && body.password)) {
        return res.status(400).send({ error: "Il manque des données, vous devez avoir : user_email, password." });
    }

    controller.signin(req,res);
    
});

module.exports = router;