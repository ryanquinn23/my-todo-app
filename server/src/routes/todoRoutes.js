const express = require('express');
const router = express.Router();

const {
  newTodoController,
  deleteTodoController,
  listTodosController,
} = require('../controllers/todos');

router.post('/todos', newTodoController);
router.delete('/todos/:todoId', deleteTodoController);
router.get('/todos', listTodosController);
module.exports = router;
