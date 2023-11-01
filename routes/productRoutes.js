const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET all products
router.post('/products', productController.createProduct);

router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);
router.delete('/products', productController.deleteAllProducts);
router.get('/products/search/name=:name', productController.findProductsByNameSubstring);




// Define other routes (POST, PUT, DELETE) similarly...

module.exports = router;

