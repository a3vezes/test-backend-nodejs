const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/Category')

router.get('/', CategoryController.getCategories)
router.get('/:id', CategoryController.getCategory)
router.post('/', CategoryController.createCategory)
router.put('/:id', CategoryController.updateCategory)
router.delete('/:id', CategoryController.deleteCategory)

module.exports = router
