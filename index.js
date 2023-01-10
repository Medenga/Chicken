const express = require('express')
require('dotenv').config({path: './config/.env'})
const app = express()
require('./models/dbConfig')
const path = require('path');
const exphbs = require('express-handlebars');
const postRoutes = require('./routes/postController')
const bodyParser = require('body-parser')

//const cors = require('cors');
//app.use(cors({origin: ''}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');
app.use('/chicken', postRoutes)

app.listen(process.env.PORT, () => {    
    console.log(`Écoute sur le port ${process.env.PORT}`)
})