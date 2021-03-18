import express from "express";
import conn from "../db.js";
// console.log(conn, 'conn')
const router = express.Router();

//Get genre from table genres
router.get("/genrelist", async (request, response) => {
  const genre = await conn.raw(
    `
      SELECT name FROM genres 
      `
  );
  response.json(genre.rows);
});

// Add genre to table genreusers
router.post("/addgenretolist", async (req, res) => {
  //  console.log(req.user.id)
  const addGenre = await conn.raw(
    `
      INSERT INTO genres_users (genre_id  ,user_id )
      VALUES
      (?,?) 
      `,
    [req.body.genre_id, req.user.id]
  );
  // res.json(addGenre.rows);
  // res.json({message:"post successfully"});
});

export default router;
