require("dotenv").config();

const pg = require("pg");

const { development, production, testing } = require("./config/index");

if (production.db) {
  pg.defaults.ssl = { rejectUnauthorized: false };
}

const sharedConfig = {
  client: "pg",
  migrations: { directory: "./data/migrations" },
  seeds: { directory: "./data/seeds" },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: development.db,
  },
  testing: {
    ...sharedConfig,
    connection: testing.db,
  },
  production: {
    ...sharedConfig,
    connection: production.db,
    pool: { min: 2, max: 10 },
  },
};
