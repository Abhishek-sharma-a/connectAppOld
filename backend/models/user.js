const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.define('user', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,

})