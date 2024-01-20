const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const blacklistToken = sequelize.define(
        "blacklistToken",
        {
            token:{
                allowNull: false,
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
            tableName:'blacklistToken'
          }
    );
    return blacklistToken;
}