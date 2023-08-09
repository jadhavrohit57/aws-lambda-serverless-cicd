'use strict';
const userSchema = require('../mongo/user.schema');

const dbconnect = require('../mongo/connection');

const updateUser = async (event) => {
	try {
		console.log('event ', event);
		await dbconnect();

		//update user chatStaus to online
		const userData = await userSchema.findOneAndUpdate(
			{ email: 'test@gmail.com' },
			{ chatStatus: 'online' },
			{ upsert: true, new: true }
		);
		console.log('user updated - ', userData);
	} catch (error) {
		console.log('error', error);
	}
};

module.exports = {
	updateUser
};
//  updateUser();
