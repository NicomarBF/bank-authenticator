// routes/accountRoutes.js

const express = require('express');
const router = express.Router();
const SessionController = require('../controller/SessionController');

// Rota para criar uma nova conta
router.post('/generate', SessionController.createSession);
router.post('/validate', SessionController.validateSession);

module.exports = router;