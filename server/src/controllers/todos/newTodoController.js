const addTodoModel = require('../../models/todos/addTodoModel');

const newTodoController = async (req, res, next) => {
  try {
    const { title, text } = req.body;

    const todo = await addTodoModel(title, text);

    res.send({
      status: 'ok',
      data: {
        todo,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = newTodoController;
