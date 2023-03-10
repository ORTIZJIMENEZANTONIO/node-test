const { Sequelize } = require('sequelize');

const { sequelize } = require('../../db-connection/db-connection.js');

const StationCompetitor = sequelize.define(
  'stations_competitors',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    cre_id: {
      type: Sequelize.STRING(255)
    },
    cre_id_competitor: {
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
  StationCompetitor
};
