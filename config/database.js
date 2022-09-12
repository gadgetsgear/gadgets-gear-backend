module.exports = ({ env }) => ({
	defaultConnection: 'default',
	connections: {
		default: {
			connector: 'bookshelf',
			settings: {
				client: 'postgres',
				host: env('DATABASE_HOST', '127.0.0.1'),
				port: env.int('DATABASE_PORT', 5432),
				database: env('DATABASE_NAME', 'gadgetsgear'),
				username: env('DATABASE_USERNAME', 'gadgetsgearroot'),
				password: env('DATABASE_PASSWORD', 'bca7QXR5aut6ykw!nry'),
			},
			options: {
				ssl: false,
			},
		},
	},
});
