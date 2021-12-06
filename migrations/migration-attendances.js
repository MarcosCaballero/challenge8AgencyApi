module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Attendances", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING(30),
      },
      phone: {
        type: Sequelize.STRING(16),
        allowNull: false,
      },
      jobPosition: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Attendances");
  },
};
