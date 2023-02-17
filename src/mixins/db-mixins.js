import dbConnection from "../../db-connection/db-connection.js";

// import pool from '../../db-connection/db-connection.js';

export const promiseQuery = (sqlQuery) => dbConnection.pool.query(sqlQuery);
