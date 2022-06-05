const Service = require("../models/ServiceModel");
const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../error/customError");

const registerService = asyncWrapper(async (req, res, next) => {
	const service = await Service.create(req.body);
	res.status(200).json({
		success: true,
		data: service,
	});
});

const getAllService = asyncWrapper(async (req, res, next) => {
	const services = await Service.find({});
	if (services.length == 0) {
		return next(createCustomError("No services exist", 404));
	}
	res.status(200).json({
		success: true,
		data: services,
	});
});

const getService = asyncWrapper(async (req, res, next) => {
	const { username } = req.params;
	const service = await Service.findOne({
		username,
	});
	if (!service) {
		return next(createCustomError("Service does not exist", 404));
	}
	res.status(200).json({
		success: true,
		data: service,
	});
});

const editService = asyncWrapper(async (req, res, next) => {
	const { username } = req.params;
	const service = await Service.findOneAndUpdate(
		{
			username,
		},
		req.body,
		{
			new: true,
			runValidators: true,
		}
	);
	if (!service) {
		return next(createCustomError("Service does not exist", 404));
	}
	res.status(200).json({
		success: true,
		data: service,
	});
});

const deleteService = asyncWrapper(async (req, res, next) => {
	const { username } = req.params;
	const service = await Service.deleteOne({
		username,
	});
	if (service.deletedCount === 0) {
		return next(createCustomError("No Service were deleted", 404));
	}
	res.status(200).send({
		success: true,
		message: "Service was deleted successfully",
	});
});

module.exports = {
	getAllService,
	getService,
	editService,
	registerService,
	deleteService,
};
