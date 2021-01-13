const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Tasks = require('../models/Tasks');

const connection = new Sequelize(dbConfig);

Tasks.init(connection);

module.exports = connection;