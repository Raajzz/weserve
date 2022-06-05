const { createCustomError } = require("../error/customError");
const asyncWrapper = require("../middleware/asyncWrapper");
const ServiceReview = require("../models/ServiceReviewModel");

const getReviews = asyncWrapper(async (req, res, next) => {
	const { username } = req.params;
	const reviews = await ServiceReview.find({
		username,
	});
	if (reviews.length === 0) {
		return next(
			createCustomError("No reviews exist, check username field", 404)
		);
	}
	return res.status(200).json({
		success: true,
		data: reviews,
	});
});

const postReview = asyncWrapper(async (req, res, next) => {
	const review = await ServiceReview.create(req.body);
	res.status(200).json({
		success: true,
		review,
	});
});

module.exports = { postReview, getReviews };
