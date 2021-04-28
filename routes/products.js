const express = require('express')
const router = express.Router()
const ProductsController = require('../controllers/products')

router.get('/', ProductsController.getProducts)
router.get('/:id', ProductsController.getProduct)
router.post('/', ProductsController.createProduct)
router.put('/:id', ProductsController.updateProduct)
router.delete('/:id', ProductsController.deleteProduct)

module.exports = router
