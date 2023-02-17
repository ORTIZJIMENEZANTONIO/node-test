const { Sequelize } = require('sequelize');

const { sequelize } = require('../../db-connection/db-connection.js');

const Brand = sequelize.define(
  'brands',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: Sequelize.STRING(100)
  },
  {
    timestamps: false
  }
);

module.exports = {
  Brand
};
