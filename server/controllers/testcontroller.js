var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('Hey!!! This is a test route!!!');
});

router.get('/about', function(req, res) {
    res.send('This is an about Module.')
})

router.get('/contact', function(req, res) {
    res.send({user: "Parker", email: "catalano.work@gmail.com"})
})

router.get('/projects', function(req, res) {
    res.send(['Project 1', 'Project 2'])
})

router.get('/mycontacts', function(req, res) {
    res.send([
        {user: 'David', email: 'catalano.wealth@gmail.com'},
        {user: 'Amy', email: 'acatalano.1@gmail.com'}
    ])
})

module.exports = router;