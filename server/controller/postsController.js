let router = require('express').Router();
let ticketServices = require('../services/ticketServices');
let userService = require('../services/userServices');
let jwt = require('../lib/jwt')
const { extractErrorMsgs } = require('../utils/errorHandeling');

router.post('/tickets', async (req, res) => {
    try {
        let info = await ticketServices.create(req.body.body)
        let id = info._id.toString()
        res.json({ message: 'Success', id })
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

router.get('/cartPage/:cookie', async (req, res) => {
    let { cookie } = req.params;
    let result = await jwt.verify(cookie , 'f0e95d18-feb8-4561-ae18-d3cd41b749d5');
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

// router.get('/watches/:watchId', async (req, res) => {
//     let { watchId } = req.params;
//     let result = await userService.getWatches(watchId);
//     res.json({watches: result})
// })

router.put('/unlike', async (req, res) => {
    if (req.body.token === undefined) {
        res.json({ message: "Login in order to unlike", watchId: req.body.watchId });
        return;
    }
    let result = await jwt.verify((req.body.token), 'f0e95d18-feb8-4561-ae18-d3cd41b749d5');
    let username = result.username;


    let unlike = await userService.unlike(username, req.body.watchId);
    res.json({ message: 'Success', user: username, watch: req.body.watchId })

})


router.post('/likes', async (req, res) => {
    let watch = await userService.getWatches(req.body.watchId);
    res.json({ likes: watch.likes.length })
})

//DELETE METHOD

router.delete('/watches/:watch/:cookies', async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "DELETE");
    let { watch } = req.params;
    let { cookies } = req.params;


    let result = await jwt.verify((cookies), 'f0e95d18-feb8-4561-ae18-d3cd41b749d5');
    let username = result.username;
    let user = await userService.getUser(username);

    let watchId = watch.split('deleteFromCartPage')[1];




    let delated = await userService.getByUsernameAndDelete(username, watchId);


    res.json({ message: "Gabro", products: delated.products })
})


router.get('/likes/:cookies', async (req, res) => {
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Methods", "DELETE");
    // let { watch } = req.params;
    let { cookies } = req.params;


    let result = await jwt.verify((cookies), 'f0e95d18-feb8-4561-ae18-d3cd41b749d5');
    let username = result.username;




    let userLikes = await userService.getLikes(username);

    res.json({ message: "Gabro", likes: userLikes.likes })
})

router.get('/getInfo/:id', async (req, res) => {
    let { id } = req.params;

    let info = await ticketServices.getInfo(id)
    res.json({ message: "Success", info })
})

router.get('/getInfo/:id', async (req, res) => {
    let { id } = req.params;

    let info = await ticketServices.getInfo(id)
    res.json({ message: "Success", info })
})

router.get('/tickets/:token', async (req, res) => {
    let { token } = req.params;
    let result = await jwt.verify((token), 'f0e95d18-feb8-4561-ae18-d3cd41b749d5');
    let username = result.username;
    let info = await ticketServices.getTickets(username);
    res.json({ info, username });
})


router.put('/updateTicket/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body.body1;
        let update = await ticketServices.update(id, body);
        res.json({ message: "Success" })
    } catch (e) {
        res.json({ message: 'Not updated' })
    }

})


router.delete('/deleteTicket/:id', async (req, res) => {
    try {
        let { id } = req.params;
        const deleted = await ticketServices.delete(id)
        res.json({ message: "Success" })
    } catch (e) {
        res.json({ message: "Not deleted" })
    }




})

module.exports = router;