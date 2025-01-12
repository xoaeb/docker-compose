const { Sequelize, DataTypes } = require("sequelize");

// Set up SQLite connection
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite", // This will create a file named 'database.sqlite'
});

// Define a simple model (e.g., 'User' model)
const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sync the database (create tables if they don't exist)
sequelize.sync();

module.exports = { sequelize, User };
