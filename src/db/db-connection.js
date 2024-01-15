const { Sequelize } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.oracle.database, config.oracle.user, config.oracle.password, {
    host: config.oracle.host,
    dialect: 'mysql',
    logging: false,
    sync: true,
    pool: { max: 5, min: 0, idle: 10000 }
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize