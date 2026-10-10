touch routes/productRoutes.js
echo "const express = require('express'); const { getProducts } = require('../controllers/productController'); const router = express.Router(); router.get('/products', getProducts); module.exports = router;" > routes/productRoutes.js
