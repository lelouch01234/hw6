/**
 * table Person
 */
var Sequelize = require("sequelize");
var Mysql = require("./mysql");
const { STRING, INTEGER, DATE } = Sequelize;

var Exercise = Mysql.define(
  "exercise",
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: STRING,
    reps: INTEGER,
    weight: INTEGER,
    date: STRING,
    unit: STRING
  },
  {
    freezeTableName: true,
    tableName: "exercise",
    comment: "Exercise Table"
  }
);

module.exports = Exercise;
