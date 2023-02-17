const { Sequelize } = require('sequelize');

const { sequelize } = require('../../db-connection/db-connection.js');

const StationsCompetitors = sequelize.define(
  'stations_competitors',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    cre_id: {
      type: Sequelize.STRING(255)
    },
    cre_id_competitors: {
      type: Sequelize.STRING(255)
    },
    distance: {
      type: Sequelize.FLOAT
    }
  },
  {
    timestamps: false
  }
);

module.exports = {
  StationsCompetitors
};
