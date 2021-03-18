// https://stackoverflow.com/questions/28558920/postgresql-foreign-key-syntax

// Users:
// id
// email
// password
// avatar url
// salt

import sha512 from "js-sha512";
import conn from "./db.js";

function createSalt(len = 20) {
  const vals = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let str = "";
  for (let i = 0; i < len; i++) {
    const randomIndex = Math.floor(Math.random() * vals.length);
    str += vals.charAt(randomIndex);
  }
  return str;
}
// const sha512 = require('js-sha512')
// const conn = require('./db')
// const { createSalt } = require('./utils/auth')

// NOTE this order does not matter if cascade deletion is set otherwise this is the order it'd need to be
// due to foreign key reference issue during deletion
const tables = [
  "discussions",
  "genres_users",
  "book_collections",
  "groups",
  "users",
  "books",
  "genres",
  "authors",
];
async function main() {
  for (let table of tables) {
    const hasTable = await conn.schema.hasTable(table);
    if (hasTable) {
      try {
        await conn.schema.dropTable(table);
      } catch (err) {
        console.log("error here!");
      }
    }
  }
  await conn.schema.createTable(`users`, (table) => {
    table.increments("id");
    table.string("username", 45);
    table.string("password", 128);
    table.string("email", 128);
    table.string("salt", 20);
    table.string("first_name", 100);
    table.string("last_name", 100);
    table.string("bio", 1000);
    table.string("photo", 900);
  });

  await conn.schema.createTable(`genres`, (table) => {
    table.increments("id");
    table.string("name", 200);
  });

  await conn.schema.createTable(`authors`, (table) => {
    table.increments("id");
    table.string("first_name", 200);
    table.string("last_name", 200);
  });

  await conn.schema.createTable(`books`, (table) => {
    table.increments("id");
    table.string("title", 200);
    table.string("copyright", 200);
    table.string("synopsis", 500);
    table.string("cover_pic", 900);
    table.integer("author_id").unsigned();
    table.foreign("author_id").references("authors.id").onDelete("cascade");
    table.integer("genres_id").unsigned();
    table.foreign("genres_id").references("genres.id").onDelete("cascade");
    // table.integer('group_id').unsigned()
    // table.foreign('group_id').references('groups.id').onDelete('cascade')
  });

await conn.schema.createTable(`book_collections`, (table) => {
    table.integer("book_id").unsigned();
    table.integer("user_id").unsigned();
  });

  await conn.schema.createTable(`groups`, (table) => {
    table.increments("id");
    table.integer("book_id").unsigned();
    table.foreign("book_id").references("books.id").onDelete("cascade");
  });

  await conn.schema.createTable(`discussions`, (table) => {
    table.increments("id");
    table.string("discussion");
    table.integer("user_id").unsigned();
    table.integer("parent_id").unsigned().nullable();
    table.foreign("parent_id").references("discussions.id").onDelete("cascade");
    table.timestamp("created_at").defaultTo(conn.fn.now());
    table.integer("group_id").unsigned();
    table.foreign("user_id").references("users.id").onDelete("cascade");
    table.foreign("group_id").references("groups.id").onDelete("cascade");

  });

  await conn.schema.createTable(`genres_users`, (table) => {
    table.integer("genre_id").unsigned();
    table.foreign("genre_id").references("genres.id").onDelete("cascade");
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("users.id").onDelete("cascade");
  });



  // username
  // [[deleted]]

  const salt = createSalt(20);
  await conn("users").insert({
    username: "bookclub",
    password: sha512("bookclub" + salt),
    salt: salt,
    email: "test@example.com",
    first_name: "Elena",
    last_name: "Lee",
    bio: "Discover the secret to results that last!",
    photo:
      "https://image.freepik.com/free-vector/young-girl-thumbs-up-sign-cartoon-set-illustration-premium-vector_56104-310.jpg",
  });

  await conn("users").insert({
    username: "user1",
    password: sha512("user1" + salt),
    salt: salt,
    email: "user1@example.com",
    first_name: "User",
    last_name: "One",
    bio: "I am user 1",
    photo:
      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  });

  await conn("genres").insert({
    name: "Literary Fiction",
  });

  await conn("authors").insert({
    first_name: "James",
    last_name: "Clear",
  });

  await conn("books").insert({
    title: "Atomic Habits",
    copyright: "2018 by James Clear",
    synopsis: "Tiny changes ,remarkable Results",
    cover_pic:"https://edit.org/images/cat/book-covers-big-2019101610.jpg",
    genres_id: 1,
    author_id: 1,
  });

  await conn("groups").insert({
    book_id: 1,
  });
  
  await conn("discussions").insert({
    discussion: "BEST BOOK VOTED!!",
    user_id: 1, 
    group_id: 1,
    parent_id: null
  });

  await conn("discussions").insert({
    discussion: "I agree!",
    user_id: 2, 
    group_id: 1,
    parent_id: 1
  });

  await conn("genres_users").insert({
    genre_id:1, 
    user_id:1,
  });

  await conn("book_collections").insert({
    book_id:1, 
    user_id:1,
  });
  // await conn.raw('DELETE FROM users WHERE id = 1')
  process.exit();
}
main();

// respective sql below...

// const userSQL = `
// CREATE TABLE IF NOT EXISTS users (
//     id serial primary key,
//     username varchar(45) not null,
//     password varchar(128) not null,
//     salt varchar(20) not null,
//     firstname varchar(100) not null,
//     lastname varchar(100) not null,
//     bio varchar (1000),
//     photo varchart(500)
// );
// `
// const bookSQL = `
// CREATE TABLE IF NOT EXISTS users (
//     id serial primary key,
//     username varchar(45) not null,
//     password varchar(128) not null,
//     salt varchar(20) not null,
//     firstname varchar(100) not null,
//     lastname varchar(100) not null,
//     bio varchar (1000),
//     photo varchart(500)
// );
// `
