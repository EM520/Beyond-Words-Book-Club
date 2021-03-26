import express from 'express'
import conn from '../db.js'
// console.log(conn, 'conn')
const router = express.Router()
router.get('/search', async (request, response) => {

   const qString = request.query.q.replace(' ', '%')
   
   const searchString = qString.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
   
   const newQ = `%${searchString}%`


   console.log(qString, newQ, 'wString')

//     // const id = request.params.bookId
  const search = await conn.raw(
       `
       SELECT b.title, CONCAT(a.first_name, ' ',  a.last_name) as author, g.name, g.id as genre_id, 
       b.cover_pic,b.synopsis, b.copyright, b.id FROM 
       books b
       INNER JOIN authors a
       ON b.author_id = a.id
       INNER JOIN genres g
       ON b.genres_id = g.id
       WHERE concat_ws(' ', a.first_name ,a.last_name)  like ?
       OR b.title like ? OR g.name like ?
       `,
   [newQ, newQ, newQ]
      )
     const rows = search.rows
    response.json(rows);

 })

export default router