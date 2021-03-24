import express from "express";
import conn from "../db.js";
// console.log(conn, 'conn')
const router = express.Router();

router.get("/genres", async (request, response) => {
  const genre = await conn.raw(
    `
      SELECT *
      FROM genres
      `
  );

  response.json(genre.rows);
});
router.get("/genres/books/user", async (request, response) => {
  console.log(request.user.id, "id");
  const id = request.user.id;
  const genre = await conn.raw(
    `
      SELECT DISTINCT ON (g.id) b.title, b.cover_pic, g.name, g.id
      FROM genres_users gu
      LEFT OUTER JOIN genres g on gu.genre_id = g.id
      LEFT OUTER JOIN books b on g.id = b.genres_id
      WHERE gu.user_id = ?
      `,
    [id]
  );

  response.json(genre.rows);
});

//Get genre name  based on users
router.get("/genres/user", async (request, response) => {
  // const id = [req.user.id]
  const genre = await conn.raw(
    `
      SELECT ge.id,ge.name  FROM genres ge
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

// Add genre to table genreusers
router.post("/genres/user", async (req, res) => {
  console.log(req.body.selectedGenres, "genres on user test");
  console.log(req.user.id);
  // req.body.selectedGenres.forEach(async(id) => {

  //   await conn.raw(
  //     `
  // INSERT INTO genres_users
  // VALUES
  // (?,?)
  // `,
  // [id,req.user.id]
  //     // [req.body.genre_id, req.user.id]

  //   )
  // });
  const id = req.body.id;

  await conn.raw(
    `
  INSERT INTO genres_users
  VALUES
  (?,?) 
  `,
    [id, req.user.id]
  );
  // res.json(usergenres.rows)
  res.json({ message: "User Gneres added successfully" });
});

//genres_users delete of that record
router.delete("/genres-users/user/:genreId", async (req, res) => {
  const genreId = req.params.genreId;
  const userId = req.user.id;
  console.log(genreId, userId, "genreId and userId &&&&&&&&&&&&");
  await conn.raw(
    `
    DELETE FROM genres_users gu
    WHERE gu.genre_id=? and gu.user_id = ?
    `,
    [genreId, userId]
  );

  res.json({ message: "genre deleted from user" });
});

// // TODO: get rid of this...
// router.get('/genrelist', async (request, response) => {
//   const genre = await conn.raw(
//     `
//       SELECT name FROM genres
//       `
//   )
//   response.json(genre.rows)
// })

export default router;
