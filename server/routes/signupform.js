import express from 'express'
import conn from '../db.js'
// console.log(conn, 'conn')
const router = express.Router()


//Get genre from table genres
router.get('/genrelist', async (request, response) => {
   
  const genre = await conn.raw(
      `
      SELECT name FROM genres 
      `
      )  
    response.json(genre.rows);
        
})






export default router