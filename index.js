const express = require('express')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const createError = require('http-errors')
const cors = require('cors')
require('dotenv').config()

const testRoute = require('./routers/test.router')

const app = express()

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, './logs/access.log'),
  { flags: 'a' }
)

app.use(cors({ origin: false }))
app.use(morgan('combined', { stream: accessLogStream }))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/test', testRoute)

app.use(async (req, res, next) => {
  next(createError.NotFound())
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
