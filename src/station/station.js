const { Op } = require('sequelize');

const {
  Station,
  Brand,
  Price,
  StationCompetitor
} = require('../models/model-relation');

/*
const getNextStationPoints = async (req, res) => {
  const { id } = req.query;
  const stations = await Station.findOne({
    where: {
      cre_id: id
    },
    include: [
      // Price,
      {
        model: StationCompetitor,
        where: {
          distance: {
            [Op.gt]: 0
          }
        },
        order: [['distance', 'ASC']],
        limit: 5
      }
    ]
  }).catch((err) => err);
  return res.json({
    stations
  });
};
*/

const getNextStationPoints = async (req, res) => {
  const { id } = req.query;
  const stations = await StationCompetitor.findAll({
    attributes: ['cre_id', 'distance'],
    where: {
      cre_id: id
    },
    include: [
      {
        model: Station,
        attributes: ['name'],
        order: [['distance', 'ASC']],
        include: [
          { model: Price, attributes: ['product', 'value'] },
          { model: Brand, attributes: ['name'] }
        ]
      }
    ],
    limit: 5
  }).catch((err) => err);
  return res.json({
    stations
  });
};

module.exports = {
  getNextStationPoints
};
