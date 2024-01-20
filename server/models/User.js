module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
    "user", 
    {
      id:{
        type: Sequelize.INTEGER, 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      }, 
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    },
    {
      // Options
      timestamps: true,
      underscrored: true,
      createdAt: false,
      updatedAt: false,
      tableName:'user'
    }
    );
    return User;
  };