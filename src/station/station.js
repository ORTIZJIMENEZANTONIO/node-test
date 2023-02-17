const { Op } = require('sequelize');

const {
  Station,
  Brand,
  Price,
  StationCompetitor
} = require('../models/model-relation');

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
        where: { distance: {
          [Op.gt]: 0
        }},
        order: [['distance', 'ASC']],
        limit: 5
      }
      // {
      //   model: StationCompetitor,
      //   where: {
      //     cre_id_competitor: {
      //       [Op.notIn]: [id]
      //     }
      //   }
      // }
    ]
  }).catch((err) => err);
  return res.json({
    stations
  });
};

module.exports = {
  getNextStationPoints
};
