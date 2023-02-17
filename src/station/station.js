const { Station, Brand, Price } = require('../models/model-relation');

const getNextStationPoints = async (req, res) => {
  const { id } = req.query;
  const stations = await Station.findOne({
    where: { cre_id: id },
    include: Price
  }).catch((err) => err);
  return res.json({
    stations
  });
};

module.exports = {
  getNextStationPoints
};
