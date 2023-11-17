let express = require('express');
let bodyParser = require('body-parser')
let mongoose = require('mongoose');
// let router = require('./router');
let cookieParser = require('cookie-parser');

let app = express();
let cors = require('cors')
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let URL = `mongodb://127.0.0.1:27017/users`

// app.use(router)
app.use(cookieParser())
app.use(cors())


async function dbConnect() {
    await mongoose.connect(URL);
}


let userServices = require('./services/userServices')

app.post('/login', async (req, res) => {

    try {
        let token = await userServices.login(req.body.username, req.body.password);
        res.cookie('token', token, { httpOnly: true })
        res.redirect('/')
    } catch (error) {
        // const errorMessages = extractErrorMsgs(error);
        // res.status(404).render('login', { errorMessages })
    }

})



dbConnect().then(() => console.log(`Connected to DB`)).catch(() => console.log(`Error while connecting to DB`))

app.listen(PORT, () => console.log(`Conected to ${PORT} successfully!`))


