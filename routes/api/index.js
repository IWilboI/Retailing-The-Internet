const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes); // Route for categories
router.use('/products', productRoutes);    // Route for products
router.use('/tags', tagRoutes);            // Route for tags

module.exports = router;
