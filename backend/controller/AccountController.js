// controllers/AccountController.js
const Account = require('../entities/Account');

exports.getAllAccounts = (req, res) => {
    // Lógica para buscar todas as contas
    // Exemplo:
    // Account.find()
    //     .then(accounts => {
    //         res.json(accounts);
    //     })
    //     .catch(err => {
    //         res.status(500).json({ error: err.message });
    //     });
    res.send("Olá mundo")
};

exports.createAccount = (req, res) => {
    // Lógica para criar uma nova conta
};