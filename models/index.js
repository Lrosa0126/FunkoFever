const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Funko = sequelize.define('Funko', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  // Other model attributes
});

module.exports = Funko;