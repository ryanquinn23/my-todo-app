const getDb = require('../../db/getDB');

const addTodoModel = async (title, text) => {
  let connection;

  try {
    connection = await getDb();

    const createdAt = new Date();

    const [todo] = await connection.query(
      `INSERT INTO todos (title, text, createdAt) VALUES (?, ?, ?)`,
      [title, text, createdAt]
    );

    return {
      id: todo.insertId,
      title,
      text,
      createdAt,
    };
  } finally {
    if (connection) connection.release();
  }
};

module.exports = addTodoModel;
