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
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
      // Options
      timestamps: true,
      underscrored: true,
      createdAt: "created_at",
      updatedAt: "updated_at"
    }, 
    {
      tableName:'user'
    }
    );
    return User;
  };