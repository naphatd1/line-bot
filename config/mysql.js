const mysql = require('mysql2/promise')

exports.connectMyql = async () => {
  const conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'expressdb',
    port: '3307',
  })
  return conn
}
