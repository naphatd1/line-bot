const express = require('express')
const db = require('../config/mysql')
const router = express.Router()

/* GET home page. */
router.get('/getpromotion', async function (req, res, next) {
  const conn = await db.connectMyql()
  const [rows] = await conn.query(
    'select * from pro_room order by id desc limit 12'
  )
  return res.status(200).json(rows)
})

router.get('/getpromotion/:id', async function (req, res, next) {
  const conn = await db.connectMyql()
  const [rows] = await conn.query('select * from pro_room where id=?', [
    req.params.id,
  ])
  return res.status(200).json(rows[0])
})

module.exports = router
