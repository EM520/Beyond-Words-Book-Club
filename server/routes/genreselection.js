import express from 'express'
import conn from '../db.js'
// console.log(conn, 'conn')
const router = express.Router()
router.get('/genres', async (request, response) => {
  const genre = await conn.raw(
      `
      SELECT *
      FROM genres
      `
      )
     
    response.json(genre.rows);

})

export default router