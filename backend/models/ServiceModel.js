const mongoose = require("mongoose");
const validator = require("validator");

// password field needs to be added
const serviceSchema = new mongoose.Schema({
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
	companyName: {
		type: String,
		required: [true, "The Name ofthe company is a required field"],
		maxlength: [100, "The Name of the company must not exceed 100 characters"],
	},
	servicesOffered: {
		type: [String],
		required: [true, "Must provide atleast one service"],
	},
	mobileNumber: {
		type: String,
		required: [true, "Mobile Number is a required field"],
		unique: true,
		validate: [
			validator.isMobilePhone,
			"Please enver a valid mobile phone number",
		],
	},
	mailId: {
		type: String,
		required: [true, "Mail ID is a required field"],
		validate: [validator.isEmail, "Please enter a valid Email"],
		unique: true,
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
		},
		url: {
			type: String,
		},
	},
	serviceImages: [
		{
			public_id: {
				type: String,
				required: true,
			},
			url: {
				type: String,
				required: true,
			},
		},
	],
});

module.exports = mongoose.model("Service", serviceSchema);