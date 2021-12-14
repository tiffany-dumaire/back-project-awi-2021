const express = require('express');
const router = express.Router();
const controller = require('../controllers/responsable.controller');

router.get('/all', (req, res, next) => {
    controller.getResponsables(res);
});

module.exports = router;