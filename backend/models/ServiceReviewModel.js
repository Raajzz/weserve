const mongoose = require("mongoose");

const ServiceReviewSchema = mongoose.Schema({
	// this is the username of the service (filled automatically by the frontend)
	username: {
		type: String,
		required: [true, "Username is a required field"],
		maxlength: [20, "Username cannot exceed 20 characters"],
		minlength: [3, "Username should have more than 3"],
		validate: {
			validator: function (v) {
				return /^\w+$/.test(v);
			},
			message: (props) =>
				`${props.value} is not a valid user name. Usernames should only be alphabets, numbers and underscore.`,
		},
		unique: true,
	},
	reviews: {
		// username of the reviewer, filled automatically by the frontend
		username: {
			type: String,
			required: [true, "Username is a required field"],
			maxlength: [20, "Username cannot exceed 20 characters"],
			minlength: [3, "Username should have more than 3"],
			validate: {
				validator: function (v) {
					return /^\w+$/.test(v);
				},
				message: (props) =>
					`${props.value} is not a valid user name. Usernames should only be alphabets, numbers and underscore.`,
			},
			unique: true,
		},
		rating: {
			type: Number,
			min: 1,
			max: 5,
			required: [true, "Please enter the ratings of the product"],
		},
		review: {
			type: String,
			maxlength: [1000, "Review cannot exceed 1000 characters"],
		},
	},
});

module.exports = mongoose.model("ServiceReview", ServiceReviewSchema);
