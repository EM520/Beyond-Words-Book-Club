import express from 'express'
import conn from '../db.js'
// console.log(conn, 'conn')
const router = express.Router()
router.get('/search', async (request, response) => {

   const qString = request.query.q
   const searchString = qString.toLowerCase()
   // const searchString = qString.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
   // const searchString = qString.split(' ').map( w =>  w.substring(0,1).toUpperCase()+ w.substring(1)).join(' ')
   const newSearchString = searchString.replace(/\s/g, '%')
   const newQ = `%${newSearchString}%`


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
       WHERE concat_ws(' ', lower(a.first_name) ,lower(a.last_name))  like ?
       OR lower(b.title) like ? OR lower(g.name) like ?
       `,
   [newQ, newQ, newQ]
      )
     const rows = search.rows
     console.log(rows, 'rows')
    response.json(rows);

 })

export default router