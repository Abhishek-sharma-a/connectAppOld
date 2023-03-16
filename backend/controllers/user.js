
const users = require( "../models/user.js")
const secret="test"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
let router = express.Router();
var express = require("express");





router.post("/register", (req, res) => {
    const userName = `${req.body.firstName.toLowerCase()}${shortid.generate()}${Math.floor(10 + Math.random() * 9)}@connectapp`;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const roleId = req.body.role;
    var password = req.body.password;
    var saltRounds = bcrypt.genSaltSync(10);
    var Password = bcrypt.hashSync(pass, saltRounds);
    if (role === "Admin") {
        const roleId = 1;
    }
    if (role === "Sales") {
        const roleId = 2;
    }
    if (role === "Business") {
        const roleId = 3;
    }
    if (email != "" && email != null && email != undefined) {
      var LowerCaseemail = email.toLowerCase();
    }
    var dat = new Date().toDateString();
    function checkEmails(callback) {
      pool.getConnection((err, connection) => {
        if (err) {
          return res.send({
            Message: err,
            Status: false,
          });
        } else {
          let sql =
            "SELECT COUNT(*) AS Count FROM users WHERE email='" +
            LowerCaseemail +
            "'";
  
          connection.query(sql, (err, rows) => {
            connection.release();
            if (err) {
              res.send({ Message: err + "Check Email Address" });
            } else {
              return callback(null, rows);
            }
          });
        }
      });
    }
   
    function register() {
      pool.getConnection((err, connection) => {
        if (err) {
          return res.send({ Message: err, Status: false });
        } else {
          let sql =
            "INSERT INTO users SET userName='" + userName +
            "', firstName = '" +
            firstName +
            "', lastName='" +
            lastName +
            "', email='" +
            email +
            "',password='" +
            Password +
            "', roleId='" +
            role +
            "'";
  
          connection.query(sql, (err, result) => {
  
            //connection.release();
            if (err) {
              res.send({ Message: err, Status: false });
            } else {
  
            
  
  
              var sql = "SELECT * FROM users WHERE  email ='" + email + "'";
              connection.query(sql, async function (error, results, fields) {
                if (error) {
                  connection.release();
                  return res.send({
                    Status: false,
                    Message: err,
                  });
                }
                connection.release();
                try {
                  if (results.length > 0) {
  
                    var accessToken = jwt.sign({ results }, secret, { expiresIn: "24h" });
                    var user = {
                      id: results[0].id,
                      displayName: results[0].firstName + " " + results[0].lastName,
                      
                     
                     
                      role: results[0].roleId,
                      email: results[0].email,
            
                     
                    
                      firstName: results[0].firstName,
                      lastName: results[0].lastName,
                    
                    };
  
                    res.json({
                      Status: true,
                      Message: email + " SignUp Successfuly Please Veryfy Your Email",
                      accessToken: accessToken,
                      user,
                    });
                  } else {
                    return res.send({
                      Status: false,
                      Message: "Invalid User",
                    });
                  }
                } catch (err) {
                  return res.json({ Message: err, Status: false });
                }
              });
  
            }
          });
        }
      });
    }
  
    checkEmails((err, rows) => {
      if (err) {
        return res.send({ Message: err, Status: false });
      } else {
        var counts = rows[0].Count;
        if (counts == 0) {
          checkContact((err, rows) => {
            if (err) {
              return res.send({ Message: err, Status: false });
            } else {
              var counts = rows[0].Count;
              if (counts == 0) {
                register((err, res) => {
                  if (err) {
                    return res.send({
                      Message: err,
                    });
                  }
                });
              } else {
                res.send({
                  Message: "This " + phone + " is All Ready Registered",
                  Status: false,
                });
              }
            }
          });
        } else {
          res.send({
            Message3: "All Ready Registered",
            // Message: "This " + email + " is All Ready Registered",
            Message: "Oops, looks like this email has already been used 😊",
            Status: false,
          });
        }
      }
    });
  });