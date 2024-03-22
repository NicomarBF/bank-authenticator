// controllers/AccountController.js
const Account = require('../entities/Account');

exports.getAllAccounts = (req, res) => {
    res.send("Olá mundo")
};

exports.createAccount = (req, res) => {
    console.log(req.body)
    Account.create(req.body)
    res.send("SUCCESS")
};