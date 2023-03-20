import express from "express";
// const secret="test"
const app = express();
// import bcrypt from "bcryptjs";
// import bcrypt from "bcrypt"
// import jwt from "jsonwebtoken";
// let router = express.Router();


app.post("/register", (req, res) => {
  var id = req.body.id;
  var roleId = req.body.roleId;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;


  var sql = "INSERT INTO users(`id`,`roleId`,firstName`, `lastName`,`username`, `email`, `password`) VALUES ('" + id + "' ,'" + roleId + "' ,'" + firstName + "' , '" + lastName + "' ,'" + username + "', '" + email + "' , '" + password + "'  )"

  connection.query(sql, (err, result) => {
      if (err) {
          console.log(err);
      } else {
          res.send(result);
      }
  });

});


// module.exports = {signup}