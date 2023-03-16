import express from "express";
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());


import db from './database/db.js'

db.sequelize.sync();

// app.use(morgan("dev"))

const PORT = 9000;

app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));





app.listen(PORT , ()=>{
    console.log(`the server on listening on port ${PORT}`);
})
