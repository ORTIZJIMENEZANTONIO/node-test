import { Sequelize } from 'sequelize';

import dbConnection from '../../db-connection/db-connection.js';
import station from './station-model.js';

const Price = dbConnection.sequelize.define(
  'prices  ',
  {
    id: {
      type: Sequelize.NUMBER,
      primaryKey: true
    },
    product: {
      type: Sequelize.STRING
    },
    value: {
      type: Sequelize.STRING
    },
    cre_id: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATE
    }
  },
  {
    timestamps: false
  }
);

Price.belongsTo(station.Station);

export default {
  Price
};
