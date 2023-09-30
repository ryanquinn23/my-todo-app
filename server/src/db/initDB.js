require('dotenv').config();

const getDb = require('./getDB');

const main = async () => {
  let connection;

  try {
    connection = await getDb();
    console.log('Deleting tables...');

    await connection.query('DROP TABLE IF EXISTS todos');

    console.log('Creating tables...');

    await connection.execute(`
        CREATE TABLE IF NOT EXISTS tasks (
            id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
            title VARCHAR(30) NOT NULL,
            text VARCHAR(280) NOT NULL,
            createdAt DATETIME NOT NULL
        )
        `);

    console.log('tables created, tada!!');
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) connection.release();

    process.exit();
  }
};

main();
