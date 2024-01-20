const dbConfig = require("../config/db_config.js");


// Setting up sequelize instance with required models
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Op = Sequelize.Op;

db.users = require("./User.js")(sequelize, Sequelize);
// db.posts = require("./posts_model.js")(sequelize, Sequelize);
// db.blacklistToken = require('./blacklist_jwt.js')(sequelize, Sequelize);

// db.users.hasMany(db.posts, { 
//   foreignKey: {
//     name: "userId",
//     allowNull: false
//   },
//   onDelete: "CASCADE"
// });

// db.posts.belongsTo(db.users, {
//   foreignKey: {
//     name: "userId", // create new column called userId as fkey in posts
//     allowNull: false
//   }
// });

module.exports = db;