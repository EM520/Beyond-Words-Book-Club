import express from 'express'
import conn from '../db.js'
// console.log(conn, 'conn')
const router = express.Router()

router.get('/top20', async (request, response) => {
  const top20 = await conn.raw(
    `
    SELECT books.title, books.id, books.cover_pic, authors.first_name, authors.last_name, discussions.group_id, 
    COUNT (discussions.discussion)
    FROM books
    INNER JOIN authors ON authors.id=books.author_id
    INNER JOIN discussions ON discussions.group_id=books.id
    GROUP BY books.title, books.id, authors.first_name, authors.last_name, discussions.group_id
    ORDER BY COUNT (discussions.discussion) DESC
    LIMIT 20;
    
      `
  )
  const rows = top20.rows
  response.json(rows)
})

export default router