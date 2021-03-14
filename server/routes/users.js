import express from 'express'
import conn from '../db.js'
// console.log(conn, 'conn')
const router = express.Router()
router.get('/users', async (request, response) => {
  const users = await conn.raw(`SELECT * FROM users;`)
  console.log(users.rows, 'users')
  response.json(users.rows)
})
export default router
