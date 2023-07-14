

const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/product/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await db.Product.findByPk(productId);

    if (!product) {
      return res.status(404).send('Product not found');
    }

    res.render('product-details', { product });
  } catch (error) {
    console.error('Error retrieving product details:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
