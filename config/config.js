require('dotenv').config();

const parse = require('connection-string');
const values = parse(process.env.DATABASE_URL);

module.exports =
	{
		"development": {
			"username": "root",
			"password": process.env.DEV_PASSWORD,
			"database": "extonbdd",
			"host": "127.0.0.1",
			"dialect": "mysql",
			"typeValidation": true
		},
		"test": {
			"username": "root",
			"password": null,
			"database": "database_test",
			"host": "127.0.0.1",
			"dialect": "mysql"
		},
		"production": {
			"username": values.user,
			"dialect": values.protocol,
			"password": values.password,
			"host": values.hosts[0].name,
			"database": values.path[0],
			"ssl": true,
			"dialectOptions": {
				"ssl": true
			}
		}
	};