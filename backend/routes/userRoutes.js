const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

//display all users
router.get("", getAllUsers);

//get user by id
router.get("/:id", getUserById);

//add user create
router.post("/add", addUser);

//update
router.put("/update/:id", updateUser);

//delete
router.delete("/delete/:id", deleteUser);

module.exports = router;
