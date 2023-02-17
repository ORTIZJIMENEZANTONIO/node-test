import mariadb from 'mariadb';

const getHost = () =>
  process.env.HOST || 'precios-1.c0f6dm2ucnlg.us-east-2.rds.amazonaws.com';

const getUserDB = () => 'candidatoPrueba';

const getPassDB = () => process.env.PASS || 'gaspre21.M';

const getDB = () => process.env.DATABASE || 'prueba';

const data = {
  connectionLimit: 5,
  host: getHost(),
  user: getUserDB(),
  password: getPassDB(),
  database: getDB(),
  port: 3306
};

export const pool = mariadb.createPool(data);
