const mongoose = require("mongoose");
const validator_ = require("validator");

const serviceSchema = new mongoose.Schema({
	userName: {
		type: String,
		required: [true, "Username is a required field"],
		maxlength: [20, "Username cannot exceed 20 characters"],
		minlength: [3, "Username should have more than 3"],
		validate: {
			validator: function (v) {
				return /^\w+$/.test(v);
			},
			message: (props) =>
				`${props.value} is not a valid user name. UserNames should only be alphabets, numbers and underscore.`,
		},
		unique: true,
	},
	fullName: {
		firstName: {
			type: String,
			required: [true, "First Name is a required field"],
			maxlength: [20, "First Name cannot exceed 20 characters"],
			minlength: [3, "First Name should have more than 3"],
		},
		secondName: {
			type: String,
			maxlength: [20, "Second Name cannot exceed 20 characters"],
		},
		thirdName: {
			type: String,
			maxlength: [20, "Third Name cannot exceed 20 characters"],
		},
	},
	mobileNumber: {
		type: String,
		required: [true, "Mobile Number is a required field"],
		unique: true,
		validate: [
			validator_.isMobilePhone,
			"Please enver a valid mobile phone number",
		],
	},
	mailId: {
		type: String,
		required: [true, "Mail ID is a required field"],
		validate: [validator_.isEmail, "Please enter a valid Email"],
	},
	address: {
		type: String,
		required: [true, "Address is a required field"],
	},
	bio: {
		type: String,
		maxlength: [160, "Bio should be less than 160 characters long"],
	},
	displayPhoto: {
		publicId: {
			type: String,
			required: true,
		},
		url: {
			type: String,
			required: true,
		},
	},
	coverPhoto: {
		publicId: {
			type: String,
			required: true,
		},
		url: {
			type: String,
			required: true,
		},
	},
	servicesProvided: {},
});

module.exports = mongoose.model("ServiceTemp", serviceSchema);