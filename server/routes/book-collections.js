import express from "express";
import conn from "../db.js";
// console.log(conn, 'conn')

const router = express.Router();

router.get("/book-collections/user", async (request, response) => {
  // console.log(request.user.id, "userID");
  // const id = [req.user.id]
  const userGroups = await conn.raw(
    `
      SELECT * FROM books b
      INNER JOIN book_collections bc
      ON b.id = bc.book_id
      WHERE bc.user_id=?
        `,
    [request.user.id]
  );
  response.json(userGroups.rows);
});

router.post("/book-collections/user", async (request, response) => {
  // const id = req.user.bookId;
  const userId = request.user.id;
  const { book_id } = request.body;
  await conn.raw(
    `
        INSERT INTO book_collections (book_id,user_id)
        VALUES( ?,?)
    `,
    [book_id, userId]
  );
  response.json({ message: "book collection added" });
});

router.delete("/book-collections/user/:bookId", async (req, res) => {
  const bookId = req.params.bookId;
  const userId = req.user.id;
  
  console.log(bookId,userId,"bookId and userId &&&&&&&&&&&&")
  // console.log(req.body, "**********");
  await conn.raw(
    `
    DELETE FROM book_collections bc
    WHERE bc.book_id=? and bc.user_id=?
    `,
    [bookId,userId]
  );
  res.json({ message: "Books Group deleted" });
});

export default router;
