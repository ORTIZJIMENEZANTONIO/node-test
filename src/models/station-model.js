import { Sequelize } from 'sequelize';

import dbConnection from '../../db-connection/db-connection.js';
//import price from './price-model.js';

const Station = dbConnection.sequelize.define(
  'stations',
  {
    cre_id: {
      type: Sequelize.NUMBER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    location_x: {
      type: Sequelize.STRING
    },
    location_y: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);

//Station.hasMany(price.Price);

export default {
  Station
};
