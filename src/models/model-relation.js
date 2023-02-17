const { Brand } = require('./brand-model');
const { Price } = require('./price-model');
const { StationBrand } = require('./station-brand-model');
const { StationCompetitor } = require('./station-competitors-model');
const { Station } = require('./station-model');

Station.hasMany(Price);
Price.belongsTo(Station);

module.exports = {
  Brand,
  Price,
  StationBrand,
  StationCompetitor,
  Station
};
