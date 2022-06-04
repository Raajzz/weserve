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
router.route("/details/:id").get(getUser);
router.route("/register").post(registerUser);
router.route("/edit/:id").patch(editUser);
router.route("/delete/:id").delete(deleteUser);

module.exports = router;
