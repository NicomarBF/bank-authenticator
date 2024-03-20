// routes/accountRoutes.js

const express = require('express');
const router = express.Router();
const AccountController = require('../controller/AccountController');

// Rota para buscar todas as contas
router.get('/', AccountController.getAllAccounts);

// Rota para criar uma nova conta
router.post('/', AccountController.createAccount);

module.exports = router;
