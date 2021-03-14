import knex from 'knex'

const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'bookclub',
  },
  // debug: true,
})

export default db
