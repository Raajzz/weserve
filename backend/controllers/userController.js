const User = require("../models/UserModel");
const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../error/customError");

const getAllUsers = asyncWrapper(async (req, res, next) => {
	const users = await User.find({});
	res.status(200).json({
		success: true,
		data: users,
	});
});

const getUser = asyncWrapper(async (req, res, next) => {
	const { username } = req.params;
	const user = await User.findOne({
		username,
	});
	if (!user) {
		return next(createCustomError("User does not exist", 404));
	}
	res.status(200).json({
		success: true,
		data: user,
	});
});

const editUser = asyncWrapper(async (req, res, next) => {
	const { username } = req.params;
	const user = await User.findOneAndUpdate(
		{
			username,
		},
		req.body,
		{
			new: true,
			runValidators: true,
		}
	);
	if (!user) {
		return next(createCustomError("User does not exist", 404));
	}
	res.status(200).json({
		success: true,
		data: user,
	});
});

const registerUser = asyncWrapper(async (req, res, next) => {
	const user = await User.create(req.body);
	res.status(200).json({
		success: true,
		data: user,
	});
});

const deleteUser = asyncWrapper(async (req, res, next) => {
	const { username } = req.params;
	const user = await User.deleteOne({
		username,
	});
	if (user.deletedCount === 0) {
		return next(createCustomError("No users were deleted", 404));
	}
	res.status(200).send({
		success: true,
		message: "User was deleted successfully",
	});
});

module.exports = {
	getAllUsers,
	getUser,
	editUser,
	registerUser,
	deleteUser,
};
