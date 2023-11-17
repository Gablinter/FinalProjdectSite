let router = require('express').Router();
let userServices = require('../services/userServices');
// const { extractErrorMsgs } = require('../utils/errorHandling');


router.post('/register', async (req, res) => {
    let body = req.body;
    try {
        await userServices.register(body);
        let token = await userServices.registeredLogin(req.body.email, req.body.password)
        res.cookie('token', token, { httpOnly: true });
    } catch (error) {
        // const errorMessages = extractErrorMsgs(error);
        // res.status(404).render('register', { errorMessages });
        console.log(error)
    }
})


router.post('/login', async (req, res) => {

    try {
        let token = await userServices.login(req.body.username, req.body.password);

        res.cookie('token', token, { httpOnly: true })
    } catch (error) {
        // const errorMessages = extractErrorMsgs(error);
        // res.status(404).render('login', { errorMessages })
        console.log(error)
    }



})

module.exports = router;
