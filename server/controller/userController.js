let router = require('express').Router();
let userServices = require('../services/userServices');
const { extractErrorMsgs } = require('../utils/errorHandeling');


router.post('/register', async (req, res) => {
    let body = req.body;
    try {
        await userServices.register(body);
        // let token = await userServices.registeredLogin(req.body.email, req.body.password)
        // res.cookie('token', token, { httpOnly: true });
    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        errorMessage = errorMessages
    }
})

let isValid = true;
let errorMessage = ''

router.post('/login', async (req, res) => {

    try {
        let token = await userServices.login(req.body.username, req.body.password);

        res.cookie('token', token, { httpOnly: true })
    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        isValid = false;
        errorMessage = errorMessages
    }



})

router.get('/login', (req, res) => {
    if (isValid) {
        res.json({ message: 'Success' })
    } else {
        res.json({ message: errorMessage })
    }
})

module.exports = router;
