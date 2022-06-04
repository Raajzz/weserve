const mongoose = require("mongoose");

const UserNameSchema = mongoose.Schema({
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
});

module.exports = mongoose.model("UserName", UserNameSchema);
