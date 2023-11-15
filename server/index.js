let express = require('express');

let app = express();
let cors = require('cors')
const PORT = process.env.PORT || 5070;


app.use(cors())

app.get('/', (req, res) => {
    res.send(`Gavro`)
})

// router.get('/api', (req, res) => {
//     res.json({ message: "Hello from server!" });
// });

// app.use('/', router);


app.listen(PORT, () => console.log(`Conected to ${PORT} successfully!`))


