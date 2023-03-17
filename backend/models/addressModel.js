module.exports = (sequelize, DataTypes) => {

    const address = sequelize.define('address', {
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                },
                userId: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                },
                country: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: false,
                },
                state: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: false,
                },
                
                city: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                },
                pincode: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    unique: true,
                },
                address: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                },
                
            })
            return address;
        }
        

