const config = require("../database/dbConfig.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = ('../models/user.model.js')(sequelize,Sequelize);
db.role = ('../models/role.model.js')(sequelize,Sequelize);

db.role.belongsToMany(db.user, {
    through: "user_role",
    foreignKey: "role_id",
    otherKey: "user_id"
});

db.user.belongsToMany(db.role, {
    through: "user_role",
    foreignKey: "user_id",
    otherKey: "role_id"
});

db.ROLES = ["user", "moderator", "admin"];

module.exports = db;