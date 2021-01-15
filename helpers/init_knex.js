// set Database with knex config database in file .env
const knex = require("knex")({
    client: "mysql",
    connection: {
      host: process.env.HOST,
      user: process.env.user,
      password: process.env.password,
      database: process.env.database,
    },
  })
  
  module.exports = knex