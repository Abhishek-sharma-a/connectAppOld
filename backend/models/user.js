module.exports = (sequelize, Sequelize) =>{

    const users = sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
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
        
    })
    return users;
}

 