let express = require('express');
let bodyParser = require('body-parser')
let mongoose = require('mongoose');
let router = require('./router');
let cookieParser = require('cookie-parser');

let app = express();
let cors = require('cors')
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let URL = `mongodb://127.0.0.1:27017/users`

app.use(cookieParser());
app.use(cors());
app.use(router);


async function dbConnect() {
    await mongoose.connect(URL);
}

dbConnect().then(() => console.log(`Connected to DB`)).catch(() => console.log(`Error while connecting to DB`))




app.listen(PORT, () => console.log(`Conected to ${PORT} successfully!`))


