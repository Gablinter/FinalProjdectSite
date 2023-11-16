let express = require('express');
let bodyParser = require('body-parser')


let app = express();
let cors = require('cors')
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



app.use(cors())


app.listen(PORT, () => console.log(`Conected to ${PORT} successfully!`))


