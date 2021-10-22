require("dotenv").config();
module.exports = {
  jwt_secret: process.env.JWT_SECRET || "afternoon-side-project",
  port: process.env.PORT || 8000,
  environment: process.env.NODE_ENV || "development",
  development: {
    db: process.env.DEV_DATABASE_URL,
  },
  testing: {
    db: process.env.TESTING_DATABASE_URL,
  },
  production: {
    db: process.env.DATABASE_URL,
  },
};
