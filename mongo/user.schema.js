const mongoose = require('mongoose');

const { Schema } = mongoose;

const user = new Schema(
	{
		email: { type: String, requied: true, lowercase: true },
		name: String,
		status: {
			type: String,
			default: 'active'
		},
		chatStatus: {
			type: String,
			default: 'offline'
		}
	},
	{
		timestamps: true,
		versionKey: false
	}
);

module.exports = mongoose.model('user', user);
