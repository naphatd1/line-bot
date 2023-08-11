const mysql = require('mysql2/promise')

exports.connectMyql = async () => {
  const conn = await mysql.createConnection({
    host: process.env.DB_URL,
    user: 'root',
    password: '1234',
    database: 'expressdb',
    port: '3307',
  })
  return conn
}
