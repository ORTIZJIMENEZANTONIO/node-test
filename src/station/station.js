const { Station } = require('../models/model-relation');

const getNextStationPoints = async (req, res) => {
  const { id } = req.query;
  const stations = await Station.findByPk(id).catch((err) => err);
  return res.json({
    stations
  });
};

module.exports = {
  getNextStationPoints
};
