const { Sequelize } = require('sequelize');

const { sequelize } = require('../../db-connection/db-connection.js');

const StationBrand = sequelize.define(
  'stations_brands',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    cre_id: {
      type: Sequelize.STRING(255)
    },
    id_brand: {
      type: Sequelize.INTEGER
    },
    date_report: {
      type: Sequelize.DATE
    }
  },
  {
    timestamps: false
  }
);

module.exports = {
  StationBrand
};
