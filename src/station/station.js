import { promiseQuery } from '../mixins/db-mixins.js';
import stationModel from '../models/station-model.js';
import { stationsQry } from './station-query.js';

const getNextStationPoints = async (req, res) => {
  const { id } = req.query;
  const stations = await stationModel.Station.findByPk(id).catch((err) => err);
  return res.json({
    stations
  });
};

export default {
  getNextStationPoints
};
