let router = require('express').Router();
let userServices = require('../services/userServices');
let ticketServers = require('../services/ticketServices')
const { extractErrorMsgs } = require('../utils/errorHandeling');

let isValid;
let errorMessage = '';
let messageToken = '';
let messageTokenRegister = '';
let isPosted = false;




router.post('/login', async (req, res) => {
    try {
        let token = await userServices.login(req.body.username, req.body.password);
        messageToken = token;
        isValid = true;
    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        isValid = false;
        errorMessage = errorMessages
    }
})

router.get('/loggedin', async (req, res) => {
    if (isValid) {
        res.json({ message: 'Success', messageToken, })
    }
})



router.post('/register', async (req, res) => {
    let body = req.body;
    try {
        await userServices.register(body);
        let token = await userServices.registeredLogin(req.body.username, req.body.password);
        messageTokenRegister = token;
        isPosted = true;
    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        errorMessage = errorMessages
    }
})


router.get('/registered', (req, res) => {
    if (isPosted) {
        res.json({ message: 'Success', messageTokenRegister, })
        messageTokenRegister = '';
    } else {
        res.json({ message: errorMessage })
    }
})


router.post('/tickets', (req, res) => {

    ticketServers.create(req.body.body)
})

module.exports = router;
