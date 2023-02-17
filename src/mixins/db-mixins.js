const { pool } = require('../../db-connection/db-connection.js');

export const promiseQuery = (sqlQuery) => pool.query(sqlQuery);
