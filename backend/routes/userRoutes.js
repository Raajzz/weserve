const express = require("express");
const router = express.Router();

const {
	getUser,
  getAllUsers,
	editUser,
	registerUser,
	deleteUser,
} = require("../controllers/userController");

router.route("/alldetails").get(getAllUsers)
router.route("/details/:username").get(getUser);
router.route("/register").post(registerUser);
router.route("/edit/:username").patch(editUser);
router.route("/delete/:username").delete(deleteUser);

module.exports = router;
