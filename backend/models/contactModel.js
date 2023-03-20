
module.exports = (sequelize, DataTypes) => {

    const contact = sequelize.define('contact', {
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
                phone: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: false,
                },
                alternateNumber: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: false,
                },
                
              
                
            })
            return contact;
        }
        

