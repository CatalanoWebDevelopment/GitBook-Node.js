const express = require('express')
const router = express.Router()
const sequelize = require('../db')
const User = sequelize.import('../models/user')
const jwt = require('jsonwebtoken')

router.post('/createuser', function (req, res) {
    let username = req.body.user.username
    let pass = req.body.user.password
    
    User.create({
        username: username,
        passwordhash: pass
    })
    .then(
        function createSuccess(user) {
           let token = jwt.sign({id: user.id}, "i_am_secret", {expiresIn: 60*10});
            
            res.json({
                user: user,
                message: "created",
                sessionToken: token
            })
        },
        function createError(err) {
            res.send(500, err.message)
        }
    )
})

module.exports = router;