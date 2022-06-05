const express = require("express");
const router = express.Router();

const {
	getReviews,
	postReview,
} = require("../controllers/serviceReviewController");

router.route("/:username").get(getReviews).post(postReview);

module.exports = router;
