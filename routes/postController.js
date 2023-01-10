const express = require('express')
const router = express.Router()
const ObjectID = require('mongoose').Types.ObjectId

const { PostModel } = require('../models/postModel');

router.get('/chicken/show', (req, res) => {
    PostModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data: " + err);
    })
})

router.post('/chicken', (req, res) => {
    const newRecord = new PostModel({
        name: req.body.name,
        birthday: req.body.birthday,
        weight: req.body.weight,
        steps: req.body.steps,
        isRunning: req.body.isRunnig
    })
    newRecord.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error creating new data : ' + err);
      })
})

router.put("/chicken/:id", (req, res) => {
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

router.delete("/chicken/:id", (req, res) => {
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