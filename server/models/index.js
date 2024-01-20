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

db.user = require("./User.js")(sequelize, Sequelize);
db.itinerary = require("./Itinerary.js")(sequelize, Sequelize);
db.country = require("./Country.js")(sequelize, Sequelize);
db.destination = require("./Destination.js")(sequelize, Sequelize);
db.blacklistToken = require('./BlackList.js')(sequelize, Sequelize);

// foreign key mapping
db.itinerary.belongsTo(db.country, {
  foreignKey: {
    name: "country_id",
    allowNull: false
  },
  onDelete: "CASCADE"
});

db.country.hasMany(db.destination, {
  foreignKey: {
    name: "country_id",
    allowNull: false
  },
  onDelete: "CASCADE"
});

db.destination.belongsTo(db.country, {
  foreignKey: {
    name: "country_id",
    allowNull: false
  },
  onDelete: "CASCADE"
});

module.exports = db;
