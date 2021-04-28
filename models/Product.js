const mongoose = require('mongoose')

// Title, description, price, category)
const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
  },
  description: {
    type: String,
    required: [true, 'Please add a title'],
  },
  price: {
    type: mongoose.Decimal128,
    required: [true, 'Please add a price'],
    min: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Product', ProductSchema)
