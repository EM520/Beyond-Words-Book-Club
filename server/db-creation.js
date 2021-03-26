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
    table.text("bio");
    table.text("photo");
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
  const users = [
    {
      username: "user1",
      password: sha512("user1" + salt),
      salt: salt,
      email: "user1@example.com",
      first_name: "User",
      last_name: "One",
      bio: "I am user 1",
      photo: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
      username: "user2",
      password: sha512("user1" + salt),
      salt: salt,
      email: "user2@example.com",
      first_name: "User2",
      last_name: "Two",
      bio: "I am user 2",
      photo:
        "https://png.pngtree.com/png-clipart/20190516/original/pngtree-cute-girl-avatar-material-png-image_4023832.jpg",
    },
  ];
  for (let user of users) {
    await conn("users").insert(user);
  }

  // await conn("genres").insert(
    const genres = [
    {
      name: "Literary Fiction",
    },
     {
       name: "Autobiographies"
     },
    {
      name: "Action and Adventure"
    },
    {
      name: "Fantasy",
    },
    {
      name: "Detective and Mystery",
    }, 
    {
      name: "Suspense and Thrillers",
    }, 
    {
      name: "Romance",
    },
    {
      name: "Historical Fiction",
    },
    {
      name: "Science Fiction",
    },
    {
      name: "Classics",
    },

  ]

  for (let genre of genres) {
    await conn("genres").insert(genre);
  }

    
    

  const authors = [
    {
      first_name: "James",
      last_name: "Clear",
    },
    {
      first_name: "Williams",
      last_name: "Green",
    },
    {
      first_name: "Yann",
      last_name: "GMartel",
    },



    {
      first_name: "Gabriela",
      last_name: "Garcia",
    },
    {
      first_name: "Bryn",
      last_name: "Greenwood",
    },  
    {
      first_name: "Jessica",
      last_name: "Winter",
    },   
    {
      first_name: "Charlotte",
      last_name: "McConaghy",
    },
    {
      first_name: "Edward",
      last_name: "Snowden",
    },  
    {
      first_name: "Willie",
      last_name: "Nelson",
    },    
    {
      first_name: "Sally",
      last_name: "Field",
    },
    {
      first_name: "David",
      last_name: "Crow",
    },
    {
      first_name: "Betty",
      last_name: "White",
    },
    {
      first_name: "J.K.",
      last_name: "Rowling",
    },
    {
      first_name: "William",
      last_name: "Kent Krueger",
    },

    {
      first_name: "Andrew",
      last_name: "Mayne",
    },
    {
      first_name: "David",
      last_name: "Scidmore",
    },
    {
      first_name: "Jeff",
      last_name: "Carson",
    },
    {
      first_name: "Miranda",
      last_name: "Smith",
    },
    
    {
      first_name: "Marie",
      last_name: "Benedictis",
    },

    {
      first_name: "Kristina",
      last_name: "McMorris",
    },
    {
      first_name: "Britt",
      last_name: "Bennett",
    },
    {
      first_name: "Frank",
      last_name: "Herbert",
    },
    {
      first_name: "Ken",
      last_name: "Lozito",
    },    
    {
      first_name: "Alexandre",
      last_name: "Dumas",
    },    
    
  ];
  for (let author of authors) {
    await conn("authors").insert(author);
  }

  const books = [
    {
      title: "Atomic Habits",
      copyright: "2018 by James Clear",
      synopsis: "Tiny changes ,remarkable Results",
      cover_pic: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      genres_id: 1,
      author_id: 1,
    },
    {
      title: "Atomic Habits 2",
      copyright: "2019 by Williams Green",
      synopsis: "Best seller newyork times",
      cover_pic:
        "https://images-na.ssl-images-amazon.com/images/I/51rxEvLljUL._SX322_BO1,204,203,200_.jpg",
      genres_id: 1,
      author_id: 2,
    },
    {
      title: "Atomic Habits 2",
      copyright: "2019 by Williams Green",
      synopsis: "Best seller newyork times",
      cover_pic:
        "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572292885-41ZJD5Dw5KL.jpg?crop=1.00xw:0.962xh;0,0.0200xh&resize=320%3A%2A",
      genres_id: 1,
      author_id: 3,
    },
    {
      title: "Of Women and Salt",
      copyright: "March 30, 2021",
      synopsis: "A sweeping, masterful debut about a daughter's fateful choice, a mother motivated by her own past, and a family legacy that begins in Cuba before either of them were born",
      cover_pic:
        "https://images-na.ssl-images-amazon.com/images/I/51gETeDagML._SX322_BO1,204,203,200_.jpg",
      genres_id: 1,
      author_id: 4,
    },    
    {
      title: "All the Ugly and Wonderful Things",
      copyright: "October 3, 2017",
      synopsis: "A beautiful and provocative love story between two unlikely people and the hard-won relationship that elevates them above the Midwestern meth lab backdrop of their lives.",
      cover_pic:"https://images-na.ssl-images-amazon.com/images/I/51cApiT7xML._SX327_BO1,204,203,200_.jpg",
      genres_id: 1,
      author_id: 5,
    },
    {
      title: "The Reckless Oath We Made",
      copyright: "Aug 20, 2019",
      synopsis: "A provocative love story between a tough Kansas woman on a crooked path to redemption and the unlikeliest of champions, from the New York Times bestselling author of All the Ugly and Wonderful Things",
      cover_pic:
        "https://m.media-amazon.com/images/I/51+Q0EcLZ3L.jpg",
      genres_id: 1,
      author_id: 5,
    },
    {
      title: "The Fourth Child: A Novel",
      copyright: "Mar 9, 2021",
      synopsis: "Book-smart, devoutly Catholic, and painfully unsure of herself, Jane becomes pregnant in high school; by her early twenties, she is raising three children in the suburbs of western New York State. In the fall of 1991, as her children are growing older and more independent, Jane is overcome by a spiritual and intellectual restlessness that leads her to become involved with a local pro-life group.",
      cover_pic:"https://m.media-amazon.com/images/I/51Eimwc3B6L.jpg",
      genres_id: 1,
      author_id: 6,
    },
    {
      title: "Migration",
      copyright: "Aug 4, 2020",
      synopsis: "Franny Stone has always been the kind of woman who is able to love but unable to stay. Leaving behind everything but her research gear, she arrives in Greenland with a singular purpose: to follow the last Arctic terns in the world on what might be their final migration to Antarctica.",
      cover_pic:"https://m.media-amazon.com/images/I/41EkNUVCtTL.jpg",
      genres_id: 1,
      author_id: 7,
    },
    {
      title: "Permanent Record",
      copyright: "September 17, 2019",
      synopsis: "n 2013, twenty-nine-year-old Edward Snowden shocked the world when he broke with the American intelligence establishment and revealed that the United States government was secretly pursuing the means to collect every single phone call, text message, and email.",
      cover_pic:"https://m.media-amazon.com/images/I/51LGb2xWGwL.jpg",
      genres_id: 2,
      author_id: 8,
    },
    {
      title: "It's a Long Story: My Life",
      copyright: "May 5, 2015",
      synopsis: "It's a story of restlessness and the purity of the moment and living right. Of my childhood in Abbott, Texas, to the Pacific Northwest, from Nashville to Hawaii and all the way back again. Of selling vacuum cleaners and encyclopedias while hosting radio shows and writing song after song, hoping to strike gold.",
      cover_pic:"https://m.media-amazon.com/images/I/516e2oFbcKL.jpg",
      genres_id: 2,
      author_id: 9,
    },
    {
      title: "In Pieces",
      copyright: "Sep 18, 2018",
      synopsis: "One of the most celebrated, beloved, and enduring actors of our time, Sally Field has an infectious charm that has captivated the nation for more than five decades, beginning with her first TV role at the age of seventeen.",
      cover_pic:"https://m.media-amazon.com/images/I/41SYcsxGVPL.jpg",
      genres_id: 2,
      author_id: 10,
    },
    {
      title: "The Pale-Faced Lie: A True Story",
      copyright: "May 7, 2019",
      synopsis: "A violent ex-con forces his son to commit crimes in this unforgettable memoir about family and survival.",
      cover_pic:"https://m.media-amazon.com/images/I/51gQxIh+1PL.jpg",
      genres_id: 2,
      author_id: 11,
    },
    {
      title: "If You Ask Me: (And of Course You Won't)",
      copyright: "May 3, 2011",
      synopsis: "In this candid take on everything from the unglamorous reality behind red-carpet affairs to her beauty regimen (“I have no idea what color my hair is, and I never intend to find out”), Betty White shares her observations about life, celebrity, and love (for humans and animals).",
      cover_pic:"https://m.media-amazon.com/images/I/41VQENhcFxL.jpg",
      genres_id: 2,
      author_id: 12,
    },
    {
      title: "Harry Potter and the Goblet of Fire",
      copyright: "December 8, 2015",
      synopsis: "The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition.",
      cover_pic:"https://m.media-amazon.com/images/I/51Vjb2qJwzL.jpg",
      genres_id: 3,
      author_id: 13,
    },
    {
      title: "Harry Potter and the Order of the Phoenix",
      copyright: "December 8, 2015",
      synopsis: "ark times have come to Hogwarts. After the Dementors' attack on his cousin Dudley, Harry Potter knows that Voldemort will stop at nothing to find him. There are many who deny the Dark Lord's return, but Harry is not alone: a secret order gathers at Grimmauld Place to fight against the Dark forces. Harry must allow Professor Snape to teach him how to protect himself from Voldemort's savage assaults on his mind",
      cover_pic:"https://m.media-amazon.com/images/I/51-SI2+aQ2L.jpg",
      genres_id: 3,
      author_id: 13,
    },
    {
      title: "This Tender Land",
      copyright: "Sep 3, 2019",
      synopsis: "In the summer of 1932, on the banks of Minnesota’s Gilead River, Odie O’Banion is an orphan confined to the Lincoln Indian Training School, a pitiless place where his lively nature earns him the superintendent’s wrath. ",
      cover_pic:"https://m.media-amazon.com/images/I/51sDLHxbr7L.jpg",
      genres_id: 3,
      author_id: 14,
    },
    {
      title: "The Girl Beneath the Sea",
      copyright: "May 1, 2020",
      synopsis: "Coming from scandalous Florida treasure hunters and drug smugglers, Sloan McPherson is forging her own path, for herself and for her daughter, out from under her family’s shadow. ",
      cover_pic:"https://m.media-amazon.com/images/I/41kYBKvjg1L.jpg",
      genres_id: 3,
      author_id: 15,
    },
    {
      title: "Harry Potter and the Deathly Hallows",
      copyright: "December 8, 2015",
      synopsis: "As he climbs into the sidecar of Hagrid's motorbike and takes to the skies, leaving Privet Drive for the last time, Harry Potter knows that Lord Voldemort and the Death Eaters are not far behind.",
      cover_pic:"https://m.media-amazon.com/images/I/511DhzIj4cL.jpg",
      genres_id: 3,
      author_id: 13,
    },
    {    
      title: "The Stagsblood Prince: Book One of the Stagsblood Trilogy",
      copyright: "2021",
      synopsis: "The stagsblood gave him powerful magic. But it cannot give him back what he has lost or what he will lose. new gay fantasy epic begins.",
      cover_pic: "https://images-na.ssl-images-amazon.com/images/I/61jfvlZozEL.jpg",
      genres_id: 4,
      author_id: 14
  },
{    
      title: "Dellia (The Ever-Branching Tree)",
      copyright: "2019",
      synopsis: "Dellia is an epic high-fantasy romance about ordinary people thrust into extraordinary circumstances. It blends alternate worlds, action, adventure, and dire peril, with political intrigue, a generous dollop of romance, and a pinch of humor.",
      cover_pic: "https://m.media-amazon.com/images/I/51YdKNVW3EL.jpg",
      genres_id: 4, 
      author_id: 14
  },
{    
      title: "Foreign Deceit (David Wolf Book 1)",
      copyright: "2014",
      synopsis: "As if narrowly escaping an attempt on his life, his addict ex-wife being back in the picture, and complications to his all-but-certain appointment to Sheriff were not enough, Sergeant David Wolf of the Sluice County SD receives word that his brother has committed suicide",
      cover_pic: "https://m.media-amazon.com/images/I/51YdKNVW3EL.jpg",
      genres_id: 5, 
      author_id: 15, 
  },
{    
      title: "The Silversmith (David Wolf)",
      copyright: "2014",
      synopsis: "Deputy Sergeant David Wolf has been waiting sixteen years for the opportunity to follow in the footsteps of his late father and become Sheriff of the Sluice County SD, headquartered in the small ski resort town of Rocky Points, Colorado.",
      cover_pic: "https://images-na.ssl-images-amazon.com/images/I/419cWyothaL._SX326_BO1,204,203,200_.jpg",
      genres_id: 5, 
      author_id: 15,
  },
{    
      title: "The One Before",
      copyright: "2020",
      synopsis: "Della is a loving wife, a dedicated teacher, a woman trying to do her best.She has put her past far behind her. But she hasn’t forgotten the lessons she learned.",
      cover_pic: "https://images-na.ssl-images-amazon.com/images/I/41ifX3Z7wVL._SX322_BO1,204,203,200_.jpg",
      genres_id: 6, 
      author_id: 16, 
  },

{    
      title: "What I Know",
      copyright: "2020",
      synopsis: "Whisper Falls is a fresh start for Madison and her fiancé Cooper. The safe,quiet town on the shores of a beautiful lake is the perfect place to spend the rest of their lives.But then Madison learns that Cooper’s high-school girlfriend Celia disappeared after a party.",
      cover_pic: "https://images-na.ssl-images-amazon.com/images/I/51cqUbw-fcL._SX322_BO1,204,203,200_.jpg",
      genres_id: 6, 
      author_id: 16,
  },
{    
      title: "The Magnolia Sisters: An utterly perfect and heartwarming romance",
      copyright: "2020",
      synopsis: "Harper Anderson has a to-do list longer than the Colorado river, and fields of tulips to tend to at the family flower farm in Hillsboro County, California.  Her dream is to run the business with her sisters when their father retires, keeping up traditions that began with her great-great-grandmother.",
      cover_pic: "https://images-na.ssl-images-amazon.com/images/I/51V7xgnEnAL._SX322_BO1,204,203,200_.jpg",
      genres_id: 7, 
      author_id: 17,
  },
{    
      title: "Home at Summer's End: An absolutely perfect small-town",
      copyright: "2020",
      synopsis: "Rose Anderson is done with being known as “the nice one” in the small town where she lives. She’s done with playing third, fifth, seventh wheel at loud gatherings on her family’s flower farm. And most of all, she is done with the pitying looks she gets about her single status from the way-too-interested townsfolk..",
      cover_pic: "https://images-na.ssl-images-amazon.com/images/I/71Ce3yKaKTL.jpg",
      genres_id: 6, 
      author_id: 17, 
  },

  {    
    title: "Carnegie's Maid: A Novel",
    copyright: "2018",
    synopsis: "Clara Kelley is not who they think she is. She's not the experienced Irish maid who was hired to work in one of Pittsburgh's grandest households. She's a poor farmer's daughter with nowhere to go and nothing in her pockets. But the woman who shares her name has vanished, and assuming her identity just might get Clara some money to send back home.",
    cover_pic: 'https://images-na.ssl-images-amazon.com/images/I/41fk4DFFvUL._SX331_BO1,204,203,200_.jpg',
    genres_id: 7, 
    author_id: 18, 
},
{    
    title: 'Sold on a Monday: A Novel',
    copyright: '2018',
    synopsis: "The sign is a last resort. It sits on a farmhouse porch in 1931, but could be found anywhere in an era of breadlines, bank runs and broken dreams. It could have been written by any mother facing impossible choices.",
    cover_pic: 'https://images-na.ssl-images-amazon.com/images/I/41oSSR2M7iL._SX331_BO1,204,203,200_.jpg',
    genres_id: 7, 
    author_id: 19, 
},
{    
    title: 'The Vanishing Half: A Novel',
    copyright: '2020',
    synopsis: "The Vignes twin sisters will always be identical. But after growing up together in a small, southern black community and running away at age sixteen, it's not just the shape of their daily lives that is different as adults, it's everything: their families, their communities, their racial identities.",
    cover_pic: "https://images-na.ssl-images-amazon.com/images/I/41EzNnr4YUL._SX329_BO1,204,203,200_.jpg",
    genres_id: 1, 
    author_id: 20,
},
{    
    title: "Dune",
    copyright: "2003",
    synopsis: "Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for",
    cover_pic: "https://m.media-amazon.com/images/I/41BVZ25iOGL._SY346_.jpg",
    genres_id: 8, 
    author_id: 21, 
},    
{    
    title: "Children of Dune",
    copyright: "2008",
    synopsis: "The Children of Dune are twin siblings Leto and Ghanima Atreides, whose father, the Emperor Paul Muad’Dib, disappeared in the desert wastelands of Arrakis nine years ago. Like their father, the twins possess supernormal abilities—making them valuable to their manipulative aunt Alia, who rules the Empire in the name of House Atreides.",
    cover_pic: "https://m.media-amazon.com/images/I/41BajT0B3UL.jpg",
    genres_id: 8, 
    author_id: 21, 
},
{    
    title: "Genesis (First Colony Book 1)",
    copyright: "2017",
    synopsis: "Escaping wrongful imprisonment wasn’t something Connor had in mind, but being put into stasis aboard Earth’s first interstellar colony ship was something he couldn’t have prepared for.",
    cover_pic: "https://m.media-amazon.com/images/I/41BajT0B3UL.jpg",
    genres_id: 8, 
    author_id: 21
},


    {
      title: "The Count of Monte Cristo",
      copyright: "March 22, 2021",
      synopsis: "The story of his long, intolerable years in captivity, his miraculous escape, and his carefully wrought revenge creates a dramatic tale of mystery and intrigue and paints a vision of France — a dazzling, dueling, exuberant France — that has become immortal.",
      cover_pic:
        "https://m.media-amazon.com/images/I/51wuk77r6UL.jpg",
      genres_id: 9,
      author_id: 22,
    },

    // {
    //   title: "Atomic Habits 2',
    //     copyright: '2019 by Williams Green',
    //     synopsis: '',
    //     cover_pic: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572293115-41zqZwXZ-WL.jpg?crop=1.00xw:0.984xh;0,0.00600xh&resize=320%3A%2A',
    //     genres_id: 6,
    //     author_id: 2,
    // },
  ];
  for (let book of books) {
    await conn("books").insert(book);
  }

  // await conn("groups").insert(
  const groups = [
   
    { book_id: 1 }, 
    { book_id: 2 },
    { book_id: 3 }, 
    { book_id: 4 },
    { book_id: 5 }, 
    { book_id: 6 },
    { book_id: 7 }, 
    { book_id: 8 },
    { book_id: 9 }, 
    { book_id: 10 },
    { book_id: 11 }, 
    { book_id: 12 },
    { book_id: 13 }, 
    { book_id: 24 },
    { book_id: 15 }, 
    { book_id: 16 },
    { book_id: 17 }, 
    { book_id: 18 },
    { book_id: 19 }, 
    { book_id: 20 },
    { book_id: 21 }, 
    { book_id: 22 },
    { book_id: 23 }, 
    { book_id: 24 },
    { book_id: 25 }, 
    { book_id: 26 },
    { book_id: 27 }, 
    { book_id: 28 },
    { book_id: 29 }, 
    { book_id: 30 },
    { book_id: 31 }, 
    { book_id: 32 },
  ]
  for (let group of groups) {
    await conn("groups").insert(group);
  }

  await conn("discussions").insert({
    discussion: "BEST BOOK VOTED!!",
    user_id: 1,
    group_id: 1,
    parent_id: null,
  });

  await conn("discussions").insert({
    discussion: "I agree!",
    user_id: 2,
    group_id: 1,
    parent_id: 1,
  });

  await conn("genres_users").insert(
    {
      genre_id: 1,
      user_id: 1,
    },
    {
      genre_id: 2,
      user_id: 1,
    },
    {
      genre_id: 2,
      user_id: 2,
    },
    {
      genre_id: 1,
      user_id: 2,
    }
  );

  await conn("book_collections").insert(
    {
      book_id: 1,
      user_id: 1,
    },
    {
      book_id: 2,
      user_id: 2,
    }
  );
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
