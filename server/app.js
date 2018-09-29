require('dotenv').config();

var express = require('express');
var app = express();
var port = 3000
var test = require('./controllers/testcontroller');
var user = require('./controllers/usercontroller');
var authTest = require('./controllers/authtestcontroller');
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync();

app.use(bodyParser.json());
app.use(require('./middleware/headers'));
app.use('/test', test);
app.use('/api/user', user);
app.use(require('./middleware/validate-session'))
app.use('/authtest', authTest);


app.listen(port);
