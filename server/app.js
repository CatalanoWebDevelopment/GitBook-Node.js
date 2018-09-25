var express = require('express');
var app = express();
var port = 3000
var test = require('./controllers/testcontroller');

var sequelize = require('./db');
sequelize.sync();

app.listen(port);
app.use('/test', test);