const Service = require("../models/ServiceModel");
const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../error/customError");

const searchServiceName = asyncWrapper(async (req, res, next) => {
	const { servicesOffered, companyName } = req.body;
	const services = await Service.find({
		$or: [
			{
				servicesOffered: { $in: servicesOffered },
			},
			{
				companyName: companyName,
			},
		],
	});
	if (services.length === 0) {
		return next(
			createCustomError(
				"No such service exist with the provided name of the company and services",
				404
			)
		);
	}
	res.status(200).json({
		success: true,
		services,
	});
});

const searchServiceRadius = (req, res, next) => {
	console.log(req.params);
	console.log(req.query);
	res.status(200).json({
		msg: "searchServiceRadius",
	});
};

module.exports = {
	searchServiceName,
	searchServiceRadius,
};
