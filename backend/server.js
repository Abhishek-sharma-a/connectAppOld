const express = require("express") 
const cors = require("cors") 
const app = express();

var corOptions={
  origin:"https://localhost:8081"
}

const router =require("./routes/userRouter.js")
app.use("/api/users",router)
 app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));




app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});