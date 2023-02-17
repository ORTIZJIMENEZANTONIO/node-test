import mariadb from 'mariadb';
import { Sequelize } from 'sequelize';

const getHost = () =>
  process.env.HOST || 'precios-1.c0f6dm2ucnlg.us-east-2.rds.amazonaws.com';

const getUserDB = () => 'candidatoPrueba';

const getPassDB = () => process.env.PASS || 'gaspre21.M';

const getDB = () => process.env.DATABASE || 'prueba';

const config = {
  connectionLimit: 5,
  host: getHost(),
  user: getUserDB(),
  password: getPassDB(),
  database: getDB(),
  port: 3306
};

const sequelize = new Sequelize(getDB(), getUserDB(), getPassDB(), {
  dialect: 'mariadb',
  host: getHost(),
  dialectOptions: {
    connectTimeout: 1000
  }
});

const pool = mariadb.createPool(config);

export default {
  pool,
  sequelize
};
