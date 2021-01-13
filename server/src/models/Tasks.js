const { Sequelize, Model } = require('sequelize');

class Tasks extends Model {
  static init(connection) {
    super.init({
      title: Sequelize.STRING,
    }, {
      sequelize: connection,
    });
  }
}

module.exports = Tasks;