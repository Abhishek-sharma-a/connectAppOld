
// const { DataTypes } = require('sequelize');
// const { Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

    const users = sequelize.define('user', {
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                },
                roleId: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                  
                },
                firstName: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: false,
                },
                lastName: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: false,
                },
                
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                },
                
            })
            return users;
        }
        

