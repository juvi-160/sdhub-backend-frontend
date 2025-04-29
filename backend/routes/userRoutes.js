const express = require("express");
const router = express.Router();
const multer  = require('multer')

const {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  uploadImg
} = require("../controllers/userController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + file.mimetype.split('/')[1]
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

//display all users
router.get("", getAllUsers);

//get user by id
router.get("/:id", getUserById);

//add user create
router.post("/add", addUser);

//upload img
router.post('/upload', upload.single('img'),uploadImg)

//update
router.put("/update/:id", updateUser);

//delete
router.delete("/delete/:id", deleteUser);

module.exports = router;
