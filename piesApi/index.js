require('dotenv').config();

const express = require('express');
const app = express();
const pie = require('./controllers/piecontroller')

const sequelize = require('./db')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => res.render('index')) 
app.use('/pies', pie)

app.listen(3000, () => console.log(`App is listening on ${process.env.PORT}`))

