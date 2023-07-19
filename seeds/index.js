const sequelize = require('../config/connection');
const seedfunko = require('./productData');
//const seedPaintings = require('./paintingData');// ------------------------- in the example, galleryData.js and paintinfData.js live in the same folder as index.js

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedfunko();

  process.exit(0);
};

seedAll();
