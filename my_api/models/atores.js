const { Model, DataTypes } = require("sequelize");

class Atores extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING,
        email: DataTypes.STRING,
        data_de_nascimento: DataTypes.DATE,
        sexo: DataTypes.STRING,
        quantidade_de_aparicoes: DataTypes.NUMBER

      },

      {
        sequelize,
        modelName: "Atores",
      }
    );
  }
}
module.exports = Atores;