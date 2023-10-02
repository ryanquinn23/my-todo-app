const getDb = require('../../db/getDB');

const listTodosModel = async (keyword = '') => {
  let connection;
  try {
    connection = await getDb();

    const [todos] = await connection.query(
      `
            SELECT
                T.id,
                T.title,
                T.text,
                T.createdAt
            FROM todos T
            WHERE (T.text LIKE ? OR T.title LIKE ?)
            GROUP BY T.id
            ORDER BY T.createdAT;    
            
            `,
      [`%${keyword}%`, `%${keyword}%`]
    );

    return todos;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = listTodosModel;
