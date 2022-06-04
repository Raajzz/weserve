const getAllUsers = (req, res, next) => {
  res.status(200).json({
		msg: "getAllUsers",
	});
}

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

const registerUser = (req, res, next) => {
	res.status(200).json({
		msg: "registerUser",
	});
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
