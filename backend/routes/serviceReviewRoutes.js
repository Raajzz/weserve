const express = require("express");
const router = express.Router();

const {
	getReviews,
	postReview,
} = require("../controllers/serviceReviewController");

router.route("/:username").get(getReviews);
router.route("/").post(postReview);

module.exports = router;
