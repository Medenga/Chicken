const express = require('express')
const app = express()


app.listen(8080, () => {    
    console.log("Serveur à l'écoute")
})

const chicken = require('./chicken.json')

app.get('/chicken', (req,res) => {    
    res.status(200).json(chicken)
})