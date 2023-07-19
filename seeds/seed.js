// this info was given by luis the TA, he also to reference the documentation from the medium.com link posted in the group chat

const sequelize = require('../config/connection');
const Funko = require('../models/product');
const funkoData = require('./funkoData.json');
const seedDatabase = async () => {
  await sequelize.sync({ force: false });
  const Funko = await Funko.bulkCreate(nissanData);
};
seedDatabase();

// This is from 14-mvc 11-ins partials seeds/index.js

const sequelize = require('../config/connection');
const seedGallery = require('./galleryData');
const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGallery();

  await seedPaintings();

  process.exit(0);
};

seedAll();
