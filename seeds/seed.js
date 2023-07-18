const sequelize = require('../config/connection');
const Nissan = require('../models/Nissan');
const nissanData = require('./nissanData.json');
const seedDatabase = async () => {
  await sequelize.sync({ force: false });
  const Nissans = await Nissan.bulkCreate(nissanData);
};
seedDatabase();

// template, change info relative to funko
