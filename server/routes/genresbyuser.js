import express from 'express'
import conn from '../db.js'
// console.log(conn, 'conn')
const router = express.Router()
router.get('/genres', async (request, response) => {
    // console.log(genre.rows, 'genre')
    // const id = [req.user.id]
  const genre = await conn.raw(
      `
      SELECT DISTINCT ON (g.id) b.title, b.cover_pic, g.name, g.id
      FROM genres_users gu
      JOIN genres g on gu.genre_id = g.id
      JOIN books b on g.id = b.genres_id
      WHERE gu.user_id = ?
      `,
      [1]
      )
     
    response.json(genre.rows);
    // response.json("testtest!!!")
    // console.log(rows, 'genres');

})

export default router


