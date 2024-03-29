const express = require("express")
require("dotenv").config()
const app = express()
const userRoutes = require("./routes/userRoutes")
const serviceRoutes = require("./routes/serviceRoutes")
const searchRoutes = require("./routes/searchRoutes")
const serviceReviewRoutes = require("./routes/serviceReviewRoutes");
const mongooseConnect = require("./db/connect");
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");

app.use(express.json());
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/service", serviceRoutes);
app.use("/api/v1/search", searchRoutes);
app.use("/api/v1/review", serviceReviewRoutes);
app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

const startApplication = async () => {
	try {
		await mongooseConnect(process.env.MONGO_URI_CLOUD);
		app.listen(PORT, () => {
			console.log("app is listening on port 5000");
		});
	} catch (error) {
		console.log(error);
	}
};

startApplication();

// app.post("/", async (req, res, next) => {
// 	try {
// 		const task = await Temp.create(req.body);
// 		res.status(200).json({
// 			success: true,
// 			task,
// 		});
// 	} catch (error) {
// 		console.log(error);
// 	}
// });
