import express from 'express'
import conn from '../db.js'
import { createSalt, hashPassword } from '../utils/auth.js'
// console.log(conn, 'conn')
const router = express.Router()
router.get('/users', async (request, response) => {
  const users = await conn.raw(`SELECT * FROM users;`)
  console.log(users.rows, 'users')
  response.json(users.rows)
})
router.get('/users/user', async (request, response) => {
  // console.log(request.user, 'profileuser')
  //const id = [req.user.id]
  const userData = await conn.raw(
    `
    SELECT * FROM users
    WHERE id=?
      `,
    [request.user.id]
  )
  const user = userData.rows[0]
  // console.log(userData,"userdatatest!!")
  response.json(user)
  // console.log(rows, 'userphoto');
})

//Update username password and bio from  profile  into users table 
router.patch('/users', async (req, res) => {
  const updatedUser = req.body
  if (updatedUser.password) {
    updatedUser.salt = createSalt(20)
    updatedUser.password = hashPassword(updatedUser.password + updatedUser.salt)
  }
  await conn.table('users').update(updatedUser).where({ id: req.user.id })

  res.json({ mesage: 'user updated' })
})

// router.post('/registration', async (req, res) => {
//   console.log(req.body)
//   const addUser = req.body
//   if (addUser.password) {
//     addUser.salt = createSalt(20)
//     addUser.password = hashPassword(addUser.password + addUser.salt)
//   }
//   await conn.table('users').insert(addUser)

//   res.json({ mesage: 'user added' })
// })


export default router
