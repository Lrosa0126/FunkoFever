const router = require('express').Router();
const { Product } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newProduct = await Product.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProduct);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const ProductData = await Product.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!ProductData) {
      res.status(404).json({ message: 'No Product found with this id!' });
      return;
    }

    res.status(200).json(ProductData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
