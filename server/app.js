var express = require('express');
var app = express();
var port = 3000
var test = require('./controllers/testcontroller');

app.listen(port);
app.use('/test', test);