const getReviews = (req, res, next) => {
	res.status(200).json({
		msg: "getReviews",
	});
};

const postReview = (req, res, next) => {
	res.status(200).json({
		msg: "postReview",
	});
};

module.exports = { postReview, getReviews };
