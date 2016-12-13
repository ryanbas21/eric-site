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
const sequelize = new Sequelize('database_name', 'username', 'password', {
      dialect: "mysql",
      port:    5432,
    });

sequelize
  .authenticate()
  .then( err => console.log('Connection has been established successfully.'))
  .catch( err => console.log(`Unable to connect to the database: ${err}`));

module.exports = sequelize;
