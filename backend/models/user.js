module.exports = (sequelize, Sequelize) =>{

    const users = sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        roleId: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: false,
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        
    })
    return users;
}

//  jhfdk.hgfkjghdfkjgfkjcgfhjgfh

// gncgncgvcgvcncvvgjg