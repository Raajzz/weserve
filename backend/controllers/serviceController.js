const getAllService = (req, res, next) => {
  res.status(200).json({
    msg: "getAllService"
  })
}

const getService = (req, res, next) => {
	res.status(200).json({
		msg: "getService",
	});
};

const editService = (req, res, next) => {
	res.status(200).json({
		msg: "editService",
	});
};

const registerService = (req, res, next) => {
	res.status(200).json({
		msg: "registerService",
	});
};

const deleteService = (req, res, next) => {
	res.status(200).json({
		msg: "deleteService",
	});
};

module.exports = {
  getAllService,
	getService,
	editService,
	registerService,
	deleteService,
};
