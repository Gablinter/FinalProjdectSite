let router = require('express').Router();
let ticketServers = require('../services/ticketServices');
let userService = require('../services/userServices');
let jwt = require('../lib/jwt')
const { extractErrorMsgs } = require('../utils/errorHandeling');

router.post('/tickets', (req, res) => {
    try {
        ticketServers.create(req.body.body)
        res.json({message: 'Success'})
    } catch (e) {
        const errorMessages = extractErrorMsgs(e);
        res.json({ message: errorMessages[0] })
    }

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

router.post('/liked', async (req, res) => {
    if (req.body.token === undefined) {
        res.json({ message: "Login in order to like", watchId: req.body.watchId });
        return;
    }
    let result = await jwt.verify((req.body.token), 'f0e95d18-feb8-4561-ae18-d3cd41b749d5');
    let username = result.username;
    let watch = await userService.getWatches(req.body.watchId);
    if (!(watch.likes).includes(username)) {
        let like = userService.likeWatch(username, req.body.watchId);
        res.json({ message: 'Success', user: username, watch: req.body.watchId })
    } else {
        res.json({ message: "Already liked", watchId: req.body.watchId })
    }
})

router.post('/likes', async (req, res) => {
    let watch = await userService.getWatches(req.body.watchId);
    res.json({ likes: watch.likes.length })
})

module.exports = router;