const express = require('express');
const router = express.Router();

const {
  newTodoController,
  deleteTodoController,
} = require('../controllers/todos');

router.post('/todos', newTodoController);
router.delete('/todos/:todoId', deleteTodoController);

module.exports = router;
