import express from 'express'
import conn from '../db.js'
// console.log(conn, 'conn')
const router = express.Router()
router.get('/users', async (request, response) => {
  const users = await conn.raw(`SELECT * FROM users;`)
  console.log(users.rows, 'users')
  response.json(users.rows)
})
router.get('/users/user', async (request, response) => {
  console.log(request.user, 'prouser')
  //const id = [req.user.id]
  const userData = await conn.raw(
    `
    SELECT * FROM users
    WHERE id=?
      `,
    [request.user.id]
  )
  const user = userData.rows[0]
  console.log(user)
  response.json(user)
  // console.log(rows, 'userphoto');
})

//Update bio in users
router.patch('/users', async (req, res) => {
  const updatedUser = req.body
  if (updatedUser.password) {
    updatedUser.salt = createSalt(20)
    updatedUser.password = hashPassword(updatedUser.password + updatedUser.salt)
  }
  await conn.table('users').update(updatedUser).where({ id: req.user.id })
  // console.log(req.body.bio);
  // const newbio = req.body.bio;

  // const updatebio = await conn.raw(
  //   `
  //   UPDATE users
  //   SET bio=?
  //   WHERE id =?
  //   `,
  //   [newbio, req.user.id]
  // );
  // // res.json(updatebio.rows);
  res.json({ mesage: 'user updated' })
})
export default router
