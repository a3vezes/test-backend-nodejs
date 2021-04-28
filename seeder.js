const fs = require('fs')
const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv')

// Load env vars
dotenv.config()

//Load Models
const Category = require('./models/Category')
const Product = require('./models/Product')

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})

//Read Jsoin Files
const category = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/category.json`, 'utf-8')
)

const product = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/product.json`, 'utf-8')
)

// Import into DB
const importData = async () => {
  try {
    await Category.create(category)
    await Product.create(product)

    console.log('Data imported...'.green.inverse)
    process.exit()
  } catch (err) {
    console.error(err)
  }
}

//Delete data
const deleteData = async () => {
  try {
    await Category.deleteMany()
    await Product.deleteMany()

    console.log('Data destroyed...'.red.inverse)
    process.exit()
  } catch (err) {
    console.error(err)
  }
}

if (process.argv[2] === '-i') {
  importData()
} else if (process.argv[2] === '-d') {
  deleteData()
}
