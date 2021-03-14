import express from 'express'
import conn from '../db.js'
// console.log(conn, 'conn')
const router = express.Router()
router.get('/users', async (request, response) => {
  const users = await conn.raw(`SELECT * FROM users;`)
<<<<<<< HEAD
  respose.json(users.rows)
  // response.json([{ id: 1, name: 'john' }])
=======
  console.log(users.rows, 'users')
  response.json(users.rows)
>>>>>>> c2508b22c23947e495e35f40732cdd7109f978e0
})
export default router
