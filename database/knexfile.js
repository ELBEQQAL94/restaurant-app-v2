// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/restaurant-db",
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },

  production: {
    client: "pg",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
  },
};
