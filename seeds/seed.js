const sequelize = require('../config/connection');
const Funko = require('../models/product');
const funkoData = require('./funkoData.json');
const seedDatabase = async () => {
  await sequelize.sync({ force: false });
  const Funko = await Funko.bulkCreate(nissanData);
};
seedDatabase();

// template, change info relative to funko
