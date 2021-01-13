const Task = require('../models/Tasks');

module.exports = {
  async index(req, res) {
    const tasks = await Task.findAll();

    return res.json(tasks);
  },

  async store(req, res) {
    const { title } = req.body;
    
    if (!title) {
      return res.status(400).json({ error: 'Task field not filled', classError: 'alert-danger' });
    }

    const task = await Task.create({ title });

    return res.json(task);
  },

  async update(req, res) {
    const { id, title } = req.body;

    const task = await Task.findByPk(id);
    task.title = title;
    task.save();

    if (!task) {
      return res.status(400).json({ error: 'Tasks not found' });
    }
  },

  async delete(req, res) {
    const id = req.params.id;

    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(400).json({ error: 'Tasks not found' });
    }

    await task.destroy();

    return res.status(200).json({ message: 'Task successfully deleted'});
  }
};