const mongoose = require('mongoose')

mongoose.connect(
    "mongodb://localhost:27017/chicken_api",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) console.log("Mongodb connected");
        else console.log("Connexion error :" + err)
    }
)