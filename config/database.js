module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'gadgetsgear'),
      user: env('DATABASE_USERNAME', 'gadgetsgearroot'),
      password: env('DATABASE_PASSWORD', 'bca7QXR5aut6ykw!nry'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      },
    },
    debug: false,
  },
});