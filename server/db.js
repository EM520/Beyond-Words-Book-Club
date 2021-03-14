import knex from 'knex'

const db = knex({
  client: 'pg',
  connection: {
    host: 'local host',
    user: 'postgres',
    password: '',
    database: 'bookclub',
  },
  // debug: true,
})

export default db
