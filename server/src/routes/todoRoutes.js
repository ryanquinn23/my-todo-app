const express = require('express');
const router = express.Router();

const { newTodoController } = require('../controllers/todos');

router.post('/todos', newTodoController);

module.exports = router;
