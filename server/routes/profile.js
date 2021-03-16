import express from 'express'
import conn from '../db.js'
// console.log(conn, 'conn')
const router = express.Router()

//Get book title based on users with same collection
router.get('/books', async (request, response) => {
    // const id = [req.user.id]
  const booktitle = await conn.raw(
      `
    SELECT b.title FROM books b
    INNER JOIN book_collections bc
    ON b.id = bc.book_id
    WHERE bc.user_id=?
      `,
      [1]
      )
    response.json(booktitle.rows);
    console.log(rows, 'booktitle');
})

//Get user photo  based on users 
router.get('/users', async (request, response) => {
    // const id = [req.user.id]
  const userphoto = await conn.raw(
      `
    SELECT photo FROM users
    WHERE id=?
      `,
      [1]
      )  
    response.json(userphoto.rows);
    console.log(rows, 'userphoto');    
})

//Get genre name  based on users 
router.get('/genres', async (request, response) => {
    // const id = [req.user.id]
  const genre = await conn.raw(
      `
      SELECT ge.name FROM genres ge
      INNER JOIN genres_users gu 
      ON ge.id=gu.genre_id
      INNER JOIN users u
      ON gu.user_id = u.id
      WHERE u.id=?
      `,
      [1]
      )  
    response.json(genre.rows);
    console.log(rows, 'genre');    
})

//Update book group  based on users 
router.patch("/books/:userId", async (req, res) => {
    console.log("request body", req.body);
    const userId = req.params.userId;
    await conn("books").where({ id: userId }).update(req.body);
    res.json({ message: "Books Group updated" });
  });

//Books group Delete 
router.delete('/bookgroup', async (request, response) => {
    
  await conn.raw(
      `
      DELETE FROM book_collections bc
      
      WHERE bc.book_id=?
      `,
      [6]
      )  
    response.json({ message: "Books Group deleted" });
       
})



export default router