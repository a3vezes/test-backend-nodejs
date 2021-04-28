const Category = require('../models/Category')

// @desc Get categories
// @route GET /api/v1/category
exports.getCategories = async (req, res) => {
  const category = await Category.find({})

  if (!category) {
    return res
      .status(404)
      .json({ success: false, error: { message: 'Categories not found' } })
  }

  res.status(200).json({ sucess: true, data: category })
}

// @desc Get single category
// @route GET /api/v1/category/:id
exports.getCategory = async (req, res) => {
  const category = await Category.findById(req.params.id)

  if (!category) {
    return res
      .status(404)
      .json({ success: false, error: { message: 'Category not found' } })
  }

  res.status(200).json({ sucess: true, data: category })
}

// @desc Create category
// @route POST /api/v1/category/
exports.createCategory = async (req, res) => {
  const category = await Category.create(req.body)

  res.status(200).json({ sucess: true, data: category })
}

// @desc Update category
// @route PUT /api/v1/category/:id
exports.updateCategory = async (req, res) => {
  let category = await Category.findById(req.params.id)

  if (!category) {
    return res
      .status(404)
      .json({ success: false, error: { message: 'Category not found' } })
  }

  category = await Category.findOneAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })

  res.status(200).json({ sucess: true, data: category })
}

// @desc Delete category
// @route DELETE /api/v1/category/:id
exports.deleteCategory = async (req, res) => {
  let category = await Category.findById(req.params.id)

  if (!category) {
    return res
      .status(404)
      .json({ success: false, error: { message: 'Category not found' } })
  }

  await Category.deleteOne(category)

  res.status(200).json({ sucess: true, data: {} })
}
