const { CustomError } = require("../error/customError");

const errorHandlerMiddleware = (err, req, res, next) => {
	if (err instanceof CustomError) {
		return res.status(err.statusCode || 404).json({
			success: false,
			message: err.message,
		});
	}
	return res.status(500).json({
		success: false,
		message: err.message,
	});
};

module.exports = errorHandlerMiddleware;
