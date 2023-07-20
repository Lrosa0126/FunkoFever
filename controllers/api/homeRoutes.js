const router = require('express').router;
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all users, sorted by name
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((user) => user.get({ plain: true }));

    // Pass serialized data into Handlebars.js template res.render('homepage', { users });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
