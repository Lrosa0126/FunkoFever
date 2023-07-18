const sequelize = require('../config/connection');
const { User, Product } = require('../models');


const funkoData = require('./funkoData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const product = await Product.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // for (const Product of funkoData) {
  //   await Product.create({
  //     ...Product,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
