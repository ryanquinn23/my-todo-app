const deleteTodoModel = require('../../models/todos/deleteTodoModel');

const deleteTodoController = async (req, res, next) => {
  try {
    const { todoId } = req.params;

    await deleteTodoModel(todoId);

    res.send({
      status: 'ok',
      message: 'Todo deleted',
    });
  } catch (err) {
    next(err);
  }
};
module.exports = deleteTodoController;
