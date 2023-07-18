const router = require('express').Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');

router.use('/users', userRoutes);
router.use('/Product', productRoutes);

module.exports = router;
