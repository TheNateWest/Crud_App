const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users")


router.get("/", usersController.getAllUsers)
router.get("/:id", usersController.getUserById)
router.post("/create-user", usersController.createUser)
router.put("/update-user/:id", usersController.updateUser)
router.delete("/delete-user/:id", usersController.deleteUser)

module.exports = router