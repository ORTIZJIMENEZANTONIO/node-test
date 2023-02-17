const { Brand } = require('./brand-model');
const { Price } = require('./price-model');
const { StationBrand } = require('./station-brand-model');
const { StationCompetitor } = require('./station-competitors-model');
const { Station } = require('./station-model');

Station.hasMany(Price, {
  sourceKey: 'cre_id',
  foreignKey: 'cre_id'
});
Price.belongsTo(Station, {
  foreignKey: {
    name: 'cre_id'
  }
});

Station.belongsToMany(Brand, {
  through: 'stations_brands',
  foreignKey: 'cre_id'
});
Brand.belongsToMany(Station, {
  through: 'stations_brands',
  foreignKey: 'id_brand'
});

Station.hasMany(StationCompetitor, {
  sourceKey: 'cre_id',
  foreignKey: 'cre_id_competitor'
});
StationCompetitor.belongsTo(Station, {
  foreignKey: {
    name: 'cre_id'
  }
});

module.exports = {
  Brand,
  Price,
  StationBrand,
  StationCompetitor,
  Station
};
