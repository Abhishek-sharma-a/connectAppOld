module.exports = (sequelize, Sequelize) => {
    const address = sequelize.define("address", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        userId: {
            type: Sequelize.INTEGER,
            uniqueKey: true
        },
        country: {
            type: Sequelize.STRING
        },
        state: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        pincode: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING
        }


    });

    return address;
};