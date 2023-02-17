import { promiseQuery } from '../mixins/db-mixins.js';
import { stationsQry } from './station-query.js';

const getNextStationPoints = (req, res) => {
  const { id } = req.query;
  return promiseQuery(stationsQry(id))
    .then((result) => res.json(result))
    .catch((err) => console.error(err));
};

export default {
  getNextStationPoints
};
