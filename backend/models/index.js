const dbConfig= require("../config/db.config.js")
const {Sequelize,Datatypes}= require("sequelize")

const sequelize=new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorsAliases:false,

        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle
        }

    }
)

sequelize.authenticate().then(()=>{
    console.log("connected");
}).catch(err=>{
    console.log("ERROR"+err);
})


const db = {}

db.Sequelize=Sequelize
db.sequelize=sequelize

db.users=require("./userModel.js")(sequelize,Datatypes)
db.address=require("./addressModel.js")(sequelize,Datatypes)
db.contact=require("./contactModel.js")(sequelize,Datatypes)
db.role=require("./roleModel.js")(sequelize,Datatypes)

db.sequelize.sync({force:false}).then(()=>{
    console.log(`yes re-sync done!`);
})
module.exports = db
