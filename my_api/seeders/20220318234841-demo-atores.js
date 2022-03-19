'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
  await queryInterface.bulkInsert('Atores', [
      {
        nome: 'Naomi',
        sobrenome: 'Harris',
        email: 'naomi@moonligth.com',
        data_de_nascimento: "1976-09-06",
        sexo: "F",
        quantidade_de_aparicoes: 156,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Trevante',
        sobrenome: 'Rhodes',
        email: 'trevante@moonligth.com',
        data_de_nascimento: "1990-02-10",
        sexo: "M",
        quantidade_de_aparicoes: 87,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Ashton',
        sobrenome: 'Sanders',
        email: 'sanders@moonligth.com',
        data_de_nascimento: "1995-10-24",
        sexo: "F",
        quantidade_de_aparicoes: 78,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Mahershala',
        sobrenome: 'Ali',
        email: 'ali@moonligth.com',
        data_de_nascimento: "1974-02-16",
        sexo: "M",
        quantidade_de_aparicoes: 187,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Atores', null, {});
    
  }
};
