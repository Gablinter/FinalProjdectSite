let router = require('express').Router();
let ticketServers = require('../services/ticketServices');
let userService = require('../services/userServices');
let jwt = require('../lib/jwt')

router.post('/tickets', (req, res) => {
    ticketServers.create(req.body.body)
})


router.post('/addToCart', async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    let result = await jwt.verify((req.body.token), 'f0e95d18-feb8-4561-ae18-d3cd41b749d5');
    let getUser = await userService.getUser(result.username);
    if (!(getUser.products).includes(req.body.watch, 0)) {
        let user = await userService.getByUsernameAndUpdate(result.username, req.body.watch);
    }

})

router.post('/cartPage', async (req, res) => {
    let token = req.body.cookie.token;
    let result = await jwt.verify(token, 'f0e95d18-feb8-4561-ae18-d3cd41b749d5');
    let username = result.username;
    let user = await userService.getUser(username);
    res.json({ products: user.products })
})



module.exports = router;