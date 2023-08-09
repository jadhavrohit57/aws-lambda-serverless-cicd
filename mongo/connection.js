require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;
console.log('MONGO_DB_URI ==> ', uri);
let conn = null;
const connect = async function() {
	if (conn == null) {
		conn = mongoose
			.connect(uri, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				serverSelectionTimeoutMS: 5000
			})
			.then(() => mongoose);
		await conn;
		console.log('MADE NEW MONGO CONNECTION');
	} else {
		console.log('USING OLD MONGO CONNECTION');
	}
	return conn;
};
// connect();
module.exports = connect;
