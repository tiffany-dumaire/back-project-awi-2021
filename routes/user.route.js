const express = require('express');
const router = express.Router();
const db = require('../database/dbConfig');

router.use((req,res,next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

router.get()

router.get('/all',(req,res,next) => {
    db.queryAll('user',function(result){
        console.log(result);
        res.status(200).send(result);
    });
});

module.exports = router;