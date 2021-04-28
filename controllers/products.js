const Product = require('../models/Product')

// @desc Get products
// @route GET /api/v1/products
exports.getProducts = async (req, res) => {
  const products = await Product.find({}).populate('Category')

  if (!products) {
    return res
      .status(404)
      .json({ success: false, error: { message: 'Products not found' } })
  }

  res.status(200).json({ sucess: true, data: products })
}

// @desc Get single product
// @route GET /api/v1/products/:id
exports.getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id).populate('Category')

  if (!product) {
    return res
      .status(404)
      .json({ success: false, error: { message: 'Product not found' } })
  }

  res.status(200).json({ sucess: true, data: product })
}

// @desc Create products
// @route POST /api/v1/products/
exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body)

  res.status(200).json({ sucess: true, data: product })
}

// @desc Update product
// @route PUT /api/v1/products/:id
exports.updateProduct = async (req, res) => {
  let product = await Product.findById(req.params.id)

  if (!product) {
    return res
      .status(404)
      .json({ success: false, error: { message: 'Product not found' } })
  }

  product = await Product.findOneAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })

  res.status(200).json({ sucess: true, data: product })
}

// @desc Delete product
// @route DELETE /api/v1/products/:id
exports.deleteProduct = async (req, res) => {
  let product = await Product.findById(req.params.id)

  if (!product) {
    return res
      .status(404)
      .json({ success: false, error: { message: 'Product not found' } })
  }

  await Product.deleteOne(product)

  res.status(200).json({ sucess: true, data: {} })
}
