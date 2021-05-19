require('../data/database');

const express = require('express');
const blogModel = require('../Models/blogModel');
const router = express.Router();


router.get('/', (req, res) => {
    blogModel.find({}, (err, documents) => {
        if (err) {
            res.status(500).send('error');
        }
        else {
            res.status(200).send(documents);
        }
        // err ? res.status(500).send('error') : res.status(200).send(documents);
    })
});

router.post('/', (req, res) => {
    const newblog = new blogModel({
        ...req.body
    })
    newblog.save()
        .then(() => {
            res.status(200).send("ok")
        })
        .catch((err) => {
            res.status(500).send('error')
            console.log(err)
        });
})


module.exports = router;