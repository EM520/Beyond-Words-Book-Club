import express from 'express'
import conn from '../db.js'
// console.log(conn, 'conn')
const router = express.Router()


router.get('/search/", async (request, response) => {
         `
           SELECT b.title, b.copyright, b.synopsis, b.cover_pic, b.author_id, a.first_name, a.last_name 
           FROM books b
           JOIN authors a 
           ON b.author_id = a.id
           WHERE b.id = ?
          `,
          [id]

}



export default router