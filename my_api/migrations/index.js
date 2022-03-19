"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable("atores", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
       },
       nome: {
         type: Sequelize.STRING,
         allowNull: false
       },
       sobrenome: {
         type: Sequelize.STRING,
         allowNull: false
       },
       email: {
        type: Sequelize.STRING,
        allowNull: false
       },
       data_de_nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
       },
       sexo: {
        type: Sequelize.STRING,
        allowNull: false
       },
       quantidade_de_aparicoes: {
        type: Sequelize.NUMBER,
        allowNull: false
      },
       createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("atores");
  },
};