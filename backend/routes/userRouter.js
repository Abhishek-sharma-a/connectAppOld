const userController= require("../controllers/userController.js")
const router = require('express').Router()


router.post("/addUser",userController.addUser)
router.get("/getAlluser",userController.getAlluser)
router.get("/:id",userController.getSingleuser)
router.put("/:id",userController.updateSingleuser)
router.delete("/:id",userController.deleteSingleuser)


module.exports = router