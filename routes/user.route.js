const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');

router.get('/all', (req,res,next) => {
    controller.getAllUsers(res);
});

router.get('/byId/:id',(req,res,next) => {
    const id = req.params['id'];
    controller.getUserById(id,res);
});

router.post('/create',(req,res,next) => {
    controller.createUser(req, res);
});


module.exports = router;