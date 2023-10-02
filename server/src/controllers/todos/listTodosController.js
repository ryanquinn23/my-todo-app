const listTodosModel = require('../../models/todos/listTodosModel');

const listTodosController = async (req, res, next) => {
  try {
    const { keyword } = req.query;

    const todos = await listTodosModel(keyword);

    res.send({
      status: 'ok',
      data: {
        todos,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = listTodosController;
