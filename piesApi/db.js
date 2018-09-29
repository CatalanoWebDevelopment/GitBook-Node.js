require('dotenv').config()

const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.NAME, 'postgres', process.env.PASS)