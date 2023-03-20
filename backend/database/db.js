import Sequelize from 'sequelize';
const dbName = "connectapp";
const dbUser = "root";
const dbPassword = "";

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: "localhost",
    port: "3306",
    dialect: "mysql"
})

 const db ={}
db.Sequelize = Sequelize
db.sequelize = sequelize

 import user from '../models/user.js';
// const users = require("../models/user.js")



db.sequelize.sync({ force: false }).then(() => {
    console.log(`yes re-sync done!`);
})

export default db

