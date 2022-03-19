const Sequelize = require("sequelize");
const config = require("../config/config");


const cinemaAtores = require("../models/atores.js");

const connection = new Sequelize(config);

cinemaAtores.init(connection);

module.exports = connection;