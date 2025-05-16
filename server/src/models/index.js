const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);
//connected console
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });   

const db = {};
db.sequelize = sequelize;
db.User = require("./userModel")(sequelize, DataTypes);
db.Post = require("./postModel")(sequelize, DataTypes);

// Setup associations
Object.values(db).forEach(model => {
  if (model.associate) model.associate(db);
});

module.exports = db;
