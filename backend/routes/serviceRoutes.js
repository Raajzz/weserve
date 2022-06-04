const express = require("express");
const router = express.Router();

const {
  getAllService,
	getService,
	editService,
	registerService,
	deleteService,
} = require("../controllers/serviceController");

router.route("/alldetails").get(getAllService)
router.route("/details/:id").get(getService);
router.route("/register").post(registerService);
router.route("/edit/:id").patch(editService);
router.route("/delete/:id").delete(deleteService);

module.exports = router;
