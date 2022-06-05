const express = require("express");
const router = express.Router();

const {
  getAllService,
	getService,
	editService,
	registerService,
	deleteService,
} = require("../controllers/serviceController");

router.route("/alldetails").get(getAllService);
router.route("/details/:username").get(getService);
router.route("/register").post(registerService);
router.route("/edit/:username").patch(editService);
router.route("/delete/:username").delete(deleteService);

module.exports = router;
