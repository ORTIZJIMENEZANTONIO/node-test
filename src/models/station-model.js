const { Sequelize } = require('sequelize');

const { sequelize } = require('../../db-connection/db-connection.js');

const Station = sequelize.define(
  'stations',
  {
    cre_id: {
      type: Sequelize.STRING(255),
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(150)
    },
    location_x: {
      type: Sequelize.STRING(40)
    },
    location_y: {
      type: Sequelize.STRING(40)
    }
  },
  {
    timestamps: false
  }
);

module.exports = {
  Station
};
