const getDb = require('../../db/getDB');

const deleteTodoModel = async (todoId) => {
  let connection;

  try {
    connection = await getDb();

    await connection.query(`DELETE FROM todos WHERE id = ?`, [todoId]);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = deleteTodoModel;
