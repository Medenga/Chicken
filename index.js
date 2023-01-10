const express = require('express')
const app = express()
require('./models/dbConfig')
const postRoutes = require('./routes/postController')
const bodyParser = require('body-parser')

//const cors = require('cors');
//app.use(cors({origin: ''}));

app.use(bodyParser.json())
app.use('/', postRoutes)

app.listen(8080, () => {    
    console.log("Serveur à l'écoute")
})