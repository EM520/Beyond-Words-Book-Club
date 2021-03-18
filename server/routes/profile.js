import express from "express";
import conn from "../db.js";
import { createSalt, hashPassword } from "../utils/auth.js";
// console.log(conn, 'conn')
const router = express.Router();

//Get book title based on users with same collection
router.get("/books", async (request, response) => {
  // console.log(request.user.id, "userID");
  // const id = [req.user.id]
  const booktitle = await conn.raw(
    `
    SELECT * FROM books b
    INNER JOIN book_collections bc
    ON b.id = bc.book_id
    WHERE bc.user_id=?
      `,
    [request.user.id]
  );
  response.json(booktitle.rows);
});

//Get user photo  based on users
router.get("/profileuser", async (request, response) => {
  console.log(request.user, "prouser");
  //const id = [req.user.id]
  const userData = await conn.raw(
    `
    SELECT * FROM users
    WHERE id=?
      `,
    [request.user.id]
  );
  const user = userData.rows[0];
  console.log(user);
  response.json(user);
  // console.log(rows, 'userphoto');
});

//Get genre name  based on users
router.get("/genres", async (request, response) => {
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
    [request.user.id]
  );
  response.json(genre.rows);
});

//Update bio in users
router.patch("/users", async (req, res) => {
  const updatedUser = req.body;
  if (updatedUser.password) {
    updatedUser.salt = createSalt(20);
    updatedUser.password = hashPassword(
      updatedUser.password + updatedUser.salt
    );
  }
  await conn.table("users").update(updatedUser).where({ id: req.user.id });
  // console.log(req.body.bio);
  // const newbio = req.body.bio;

  // const updatebio = await conn.raw(
  //   `
  //   UPDATE users
  //   SET bio=?
  //   WHERE id =?
  //   `,
  //   [newbio, req.user.id]
  // );
  // // res.json(updatebio.rows);
  res.json({ mesage: "user updated" });
});

// //Update book group  based on users
// router.patch("/books/:userId", async (req, res) => {
//     console.log("request body", req.body);
//     const userId = req.params.userId;
//     await conn("books").where({ id: userId }).update(req.body);
//     res.json({ message: "Books Group updated" });
//   });

// Delete Books group
router.delete("/bookgroup/:bookId", async (req, res) => {
  const bookId = req.params.bookId;

  await conn.raw(
    `
      DELETE FROM book_collections bc
      WHERE bc.book_id=?
      `,
    [bookId]
  );
  res.json({ message: "Books Group deleted" });
});

export default router;
