const express = require('express')
const app = express()
require('dotenv').config()
const colors = require('colors')
const cors = require('cors')
const helmet = require('helmet')
const xss = require('xss-clean')
const mongoSanitize = require('express-mongo-sanitize')
const connectDB = require('./utils/db')

connectDB()

// Body Parser
app.use(express.json())

// Sanitize data
app.use(mongoSanitize())

// Set security headers
app.use(helmet())

// Enable CORS
app.use(cors())

// Prevent XSS
app.use(xss())

// Routes
app.use('/', (req, res) => {
  res.send('Hello World')
})

const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} on PORT ${PORT}`.yellow.bold
  )
})

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error : ${err.message}`.red)
  //Close server & exit process
  server.close(() => process.exit(1))
})
