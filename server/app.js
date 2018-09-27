var express = require('express');
var app = express();
var port = 3000
var test = require('./controllers/testcontroller');
var sequelize = require('./db');
var bodyParser = require('body-parser')

sequelize.sync();

app.use(bodyParser.json())
app.use('/test', test);

app.listen(port);
