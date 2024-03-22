// controllers/AccountController.js
const Session = require('../entities/Session');
const Account = require('../entities/Account');
const Combinations = require('../entities/Combinations');

exports.createSession = async (req, res) => {
    let account = await Account.findOne({ where: { code: req.body.code } });
    combinations = generateArrays()
    sequence = generateSequence(account.password, combinations)

    let obj = {combinations}
    
    combinations = await Combinations.create(obj);

    let session = {
        "sequence": sequence,
        "AccountId": account.id,
        "CombinationId": combinations.id
    }

    session = await Session.create(session);

    let response = {
        "session": session.id,
        "combinations": combinations.combinations
    }

    res.send(response)
}

exports.validateSession = async (req, res) => {
    let session = await Session.findOne({ where: { id: req.body.session } });

    console.log("Resposta : " + session.sequence.join(''))
    console.log("Enviada : " + req.body.sequence.join(''))

    if(session.sequence.join('') == req.body.sequence.join('')){
        res.status(200).send("Success in validate session")
    }else{
        res.status(401).send("Error in validate session")
    }
}

function generateArrays() {
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let arrays = [];

    while (arrays.length < 5) {
        let newArray = [];
        for (let i = 0; i < 2; i++) {
            const index = Math.floor(Math.random() * numbers.length);
            const number = numbers.splice(index, 1)[0];
            newArray.push(number);
        }
        arrays.push(newArray);
    }
    return arrays;
}

function generateSequence(password,arrays){
    sequence = []
    password.split('').forEach(character => {
        for(let i = 0; i < arrays.length; i++) {
            arrays[i].forEach(number => {
                if(number == character){
                    sequence.push(i)
                }
            })
        }
    })
    return sequence
}

