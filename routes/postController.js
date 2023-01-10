const express = require('express');
const router = express.Router()
const ObjectID = require('mongoose').Types.ObjectId

const { PostModel } = require('../models/postModel');

router.get('/', (req, res) => {
    res.render("chicken/add", {
        viewTitle : "Créer un chicken"
    })
})

router.post('/', (req, res) => {
    insertRecord(req, res);
});


function insertRecord(req, res) {
    var chicken = new PostModel();
    chicken.name = req.body.name
    chicken.weight = req.body.weight
    chicken.save((err, doc) => {
        if (!err)
            res.redirect('chicken/list');
        else {
            console.log('Error during record insertion : ' + err);
        }
    });
}

router.get('/list', (req,res) => {
    res.json('from list')
})

router.put("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknow : " + req.params.id)
    
    const updateRecord = {
        name: req.body.name,
        birthday: req.body.birthday,
        weight: req.body.weight,
        steps: req.body.steps,
        isRunning: req.body.isRunnig
    };

    PostModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateRecord},
        { new: true },
        (err, docs) => {
          if (!err) res.send(docs);
          else console.log("Update error : " + err);
        }
      )
})

router.delete("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknow : " + req.params.id)
    
    PostModel.findByIdAndRemove(
      req.params.id,
      (err, docs) => {
        if (!err) res.send(docs);
        else console.log("Delete error : " + err);
      })
});

module.exports = router