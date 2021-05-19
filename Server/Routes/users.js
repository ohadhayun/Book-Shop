require('../data/database');
const bcrypt = require('bcrypt');
const express = require('express');
const usersModel = require('../Models/usersModel');
const router = express.Router();


router.post('/login', (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).send('All fields are required!');
        return;
    }
    usersModel.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            res.status(500).send("ERROR, try later");
            return;
        }
        if (!user) {
            res.status(400).send("Email or password might be wrong");
            return;
        }
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err) {
                throw err;
            }
            if (result) {
                res.status(200).send("Logged in successfully!");
                return;
            }
            else {
                res.status(400).send("Email or password might be wrong");
                return;
            }
        })
        // if (user.password == req.body.password) {
        //     res.status(200).send("Logged in successfully!");
        //     return;
        // }
        // else {
        //     res.status(400).send("Email or password might be wrong");
        //     return;
        // }
    })
})

router.post('/register', (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        res.status(400).send('All fields are required!');
        return;
    }
    usersModel.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            res.status(500).send("ERROR, try later");
            return;
        }
        if (user) {
            res.status(400).send("Error, this email already signed in.");
            return;
        }
        const userData = req.body;
        bcrypt.hash(userData.password, 10, (err, hash) => {
            let newUser = new usersModel({ ...userData, password: hash });
            newUser.save().then(() => res.send("Register successfully."))
        })
        return;
    });

});

module.exports = router;