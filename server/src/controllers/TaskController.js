const Task = require('../models/Tasks');

module.exports = {
  async index(req, res) {
    const tasks = await Task.findAll();

    return res.json(tasks);
  },

  async store(req, res) {
    const { title } = req.body;
    
    if (!title) {
      return res.status(200).json({ error: 'Tasks not found', classError: 'alert-danger' });
    }

    const task = await Task.create({ title });

    return res.json(task);
  },

  async update(req, res) {
    const { id, title } = req.body;

    const tasks = await Task.findByPk(id);
    tasks.title = title;
    tasks.save();

    if (!tasks) {
      return res.status(400).json({ error: 'Tasks not found' });
    }
  },

  async delete(req, res) {
    const { id } = req.body;

    console.log(id);
  }
};