const mysql = require('mysql2/promise');

const { HOST, USER, PASS, DB } = process.env;

let pool;

const getDb = async () => {
  try {
    if (!pool) {
      const db = await mysql.createConnection({
        host: HOST,
        user: USER,
        password: PASS,
        timezone: 'Z',
      });
      db.query(`CREATE DATABASE IF NOT EXISTS ${DB}`);

      pool = mysql.createPool({
        connectionLimit: 10,
        host: HOST,
        user: USER,
        password: PASS,
        database: DB,
        timezone: 'Z',
      });
    }

    return await pool.getConnection();
  } catch (err) {
    console.error(err);
  }
};

module.exports = getDb;
