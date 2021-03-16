import express from 'express'
import conn from '../db.js'
// console.log(conn, 'conn')
const router = express.Router()
router.get('/bookclub/:bookId', async (request, response) => {
    const id = request.params.bookId
  const bookclub = await conn.raw(
      `
        SELECT b.title, b.copyright, b.synopsis, b.cover_pic, b.author_id, a.first_name, a.last_name 
        FROM books b
        JOIN authors a 
        ON b.author_id = a.id
        WHERE b.id = ?
      `,
      [id]
      )
     const rows = bookclub.rows
    response.json(rows);
// response.json({message:'testing routes'})
    console.log( rows,'bookclub');

})

router.post("/bookclub", async (request, response) => {
  // const id = req.user.bookId;
  // const userId = request.user.id
  const { book_id } = request.body;
  await conn.raw(
    `
        INSERT INTO book_collections (book_id, user_id)
        VALUES( ?,?)
    `,
    [book_id, 1]
  );
  response.json({ message: "book collection added" });
});



export default router