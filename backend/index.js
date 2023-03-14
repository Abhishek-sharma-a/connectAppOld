import express from "express";
import connection from "./connect.js"
import mysql from "mysql2"
import cors from "cors"
import morgan from "morgan";
import userRouter from "./routes/user.js"
const app = express();
app.use(morgan("dev"))
app.use("/users", userRouter);
const PORT = 9000;
const router = require('./routes/user.js');
app.use('./', router);
app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));













app.listen(PORT , ()=>{
    console.log(`the server on listening on port ${PORT}`);
})
