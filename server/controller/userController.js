// let router = require('express').Router();
// let userServices = require('../services/userServices');
// // const { extractErrorMsgs } = require('../utils/errorHandling');



// router.post('/login', async (req, res) => {

//     try {
//         let token = await userServices.login(req.body.email, req.body.password);

//         res.cookie('token', token, { httpOnly: true })
//         res.redirect('/')
//     } catch (error) {
//         const errorMessages = extractErrorMsgs(error);
//         res.status(404).render('login', { errorMessages })
//     }

// })