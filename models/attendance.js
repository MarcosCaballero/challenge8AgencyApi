const { Model } = require("sequelize");
const { stringValidation } = require("../helpers/stringValidation");

module.exports = (sequelize, DataTypes) => {
  class Attendances extends Model {}
  Attendances.init(
    {
      firstName: {
        type: DataTypes.STRING(40),
        allowNull: false,
        validate: {
          is: {
            args: stringValidation(2, 40),
            msg: "Invalid name",
          },
        },
      },
      lastName: {
        type: DataTypes.STRING(40),
        allowNull: false,
        validate: {
          is: {
            args: stringValidation(2, 40),
            msg: "Invalid name",
          },
        },
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      country: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
          is: {
            args: stringValidation(2, 30),
            msg: "invalid country",
          },
        },
      },
      phone: {
        type: DataTypes.STRING(16),
        allowNull: false,
        validate: {
          is: {
            args: stringValidation(10, 16),
            msg: "invalid phone",
          },
        },
      },
      jobPosition: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          is: {
            args: stringValidation(2, 100),
            msg: "invalid job",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Attendances",
    }
  );
  return Attendances;
};
