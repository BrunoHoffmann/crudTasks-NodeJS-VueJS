const express = require('express');
const TaskController = require('./controllers/TaskController');

const routes = express.Router();

routes.get('/tasks', TaskController.index);
routes.post('/tasks', TaskController.store);
routes.put('/tasks/update/:id', TaskController.update);
routes.delete('/tasks/delete/:id', TaskController.delete);

module.exports = routes;