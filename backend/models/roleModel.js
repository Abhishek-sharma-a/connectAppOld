
        
module.exports = (sequelize, DataTypes) => {

    const role = sequelize.define('user', {
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                },
                role: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    uniqueKey: true,
                    autoIncrement: true,
                },
                status: {
                    type: DataTypes.STRING,
                  
                },
                deleteStatus: {
                    type: DataTypes.STRING,
                   
                },
              
            })
            return role;
        }
        

