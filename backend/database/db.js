import Sequelize from 'sequelize';
const dbName = "connect";
const dbUser = "root";
const dbPassword = "";

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host:"localhost",
    port:"3306",
    dialect:"mysql"
})

const db ={}

db.Sequelize = Sequelize
db.sequelize = sequelize

//  import db from ('../models/user.js');

export default db
