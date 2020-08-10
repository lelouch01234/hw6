var Sequelize = require("sequelize");
var Mysql = new Sequelize("exercise", "root", "pwd123456", {
  host: "127.0.0.1",
  dialect: "mysql",
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    timestamps: false
  }
});

module.exports = Mysql;
