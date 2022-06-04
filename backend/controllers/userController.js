const { User } = require("../models/UserModel");

const getAllUsers = (req, res, next) => {
	res.status(200).json({
		msg: "getAllUsers",
	});
};

const getUser = (req, res, next) => {
	res.status(200).json({
		msg: "getUser",
	});
};

const editUser = (req, res, next) => {
	res.status(200).json({
		msg: "editUser",
	});
};

const registerUser = async (req, res, next) => {
	try {
		const user = await User.create(req.body);
		res.status(200).json({
			success: true,
			user,
		});
	} catch (error) {
		res.json({
			success: false,
			message: error,
		});
	}
};

const deleteUser = (req, res, next) => {
	res.status(200).json({
		msg: "deleteUser",
	});
};

module.exports = {
	getAllUsers,
	getUser,
	editUser,
	registerUser,
	deleteUser,
};
