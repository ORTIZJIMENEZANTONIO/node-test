const { Sequelize } = require('sequelize');

const { sequelize } = require('../../db-connection/db-connection.js');

const Price = sequelize.define(
  'prices',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    product: {
      type: Sequelize.STRING(20)
    },
    value: {
      type: Sequelize.FLOAT
    },
    cre_id: {
      type: Sequelize.STRING(255)
    },
    date: {
      type: Sequelize.DATE
    }
  },
  {
    timestamps: false
  }
);

module.exports = {
  Price
};
