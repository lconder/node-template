const dotenv = require('dotenv');

dotenv.config();

module.exports = {
	DATABASE_DEV: process.env.DATABASE_DEV,
	DATABASE_PROD: process.env.DATABASE_PROD,
	PORT: process.env.PORT,
};