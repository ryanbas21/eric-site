

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
const User = sequelize.define('User', {
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
}, {
  updatedAt: 'last_update',
  createdAt: 'date_of_creation'
});


sequelize
  .sync({ force: true })
  .then( err => console.log('It worked!'),
         err => console.log(`An error occurred while creating the table: ${err}`));

module.exports = User;
