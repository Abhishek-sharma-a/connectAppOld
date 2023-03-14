const user = require('../models/user.js')
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const signup = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    try {
      const oldUser = await UserModal.findOne({ email });
  
      if (oldUser) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 12);
  
      const result = await UserModal.create({
        email,
        password: hashedPassword,
        name: `${firstName} ${lastName}`,
      });
  
      const token = jwt.sign({ email: result.email, id: result._id }, secret, {
        expiresIn: "1h",
      });
      res.status(201).json({ result, token });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      console.log(error);
    }
  };
  