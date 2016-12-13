
/******************************************************************************
*
*
*                         Model
* This will define a user model that has a username and password. Furthermore,
* Sequelize will automatically add the columns id, createdAt and updatedAt.
* createdAt and updatedAt are controlled by sequelize when you create a model
* through sequelize createdAt will be set, and whenever you call
* updateAttributes / save on a model, updatedAt will be set.
*
* *****************************************************************************/
const Sequelize = require('sequelize');

const User = {
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
};

module.exports = User;
