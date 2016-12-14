/*******************************************************************************
*
*
*
*
*                           SEQUILIZE SETUP
*
*
*
*******************************************************************************/
const Sequelize = require('sequelize');
const sequelize = new Sequelize('localhost', 'Ryan', '123', {
      dialect: "mysql",
      port:    5432,
    });

sequelize
  .authenticate()
  .then( err => console.log('Connection has been established successfully.'))
  .catch( err => console.log(`Unable to connect to the database: ${err}`));

module.exports = sequelize;
