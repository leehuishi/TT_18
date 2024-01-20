const dbConfig = require("../config/db_config.js");

const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    'techtrek24',
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql'
    });

sequelize.authenticate().then(() => {
    console.log("Connection with database test has been established successfully.");
}).catch((error) => {
    console.error("Unable to connect to database: ", error);
});