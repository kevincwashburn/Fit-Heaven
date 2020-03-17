"use strict";
module.exports = (sequelize, DataTypes) => {
  const Exercises = sequelize.define(
    "Exercises",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      level: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      muscle: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      equipment: {
        type: DataTypes.STRING(20),
        allowNull: false
      }
    };
  );
  Exercises.associate = function() {
    // associations can be defined here
  };
  return Exercises;
};
