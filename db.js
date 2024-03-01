const mysql = require('mysql2/promise')
require('dotenv').config()

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: 'test',
  database: 'test',
  password: 'test',
  port: 3306,
})

module.exports = connection