import express from 'express'
import conn from '../db.js'
// console.log(conn, 'conn')
const router = express.Router()
router.get('/searchresults/', async (request, response) => {
//     // const id = request.params.bookId
  const search = await conn.raw(
       `
       SELECT b.title, CONCAT(a.first_name, ' ',  a.last_name) as author, g.name, 
       b.cover_pic,b.synopsis FROM 
       books b
       INNER JOIN authors a
       ON b.author_id = a.id
       INNER JOIN genres g
       ON b.genres_id = g.id
       WHERE (a.first_name like ? OR a.last_name like ?) 
       OR b.title like ? OR g.name like ?
       `,
   [id]
      )
     const rows = search.rows
    response.json(rows);

 })

export default router