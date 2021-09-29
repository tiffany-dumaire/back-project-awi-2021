const express = require('express');
const router = express.Router();
const db = require('../database/dbConfig');

router.get('/all',(req,res,next) => {
    db.queryAll('user',function(result){
        res.status(200).send(result);
    });
});

module.exports = router;