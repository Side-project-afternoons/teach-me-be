const { authSchema} = require("../services/schema");
const Users = require("../models/auth")

const bodyValidation = async (req, res, next) => {
    try {
      req.body = await authSchema.validate(req.body, {
        stripUnknown: true,
      });
      next();
    } catch (err) {
      next({ status: 400, message: err.message });
    }
  };

const usernameAvailability = async (req, res, next) => {
    const { username } = req.body;
    const user = await Users.findBy({ username });
    if (!user) {
      next();
    } else {
      next({ status: 409, message: "username taken" });
    }
  };
const validateUsername = async (req, res, next) => {
    const { username } = req.body;
    const user = await Users.findBy({ username });
    if (user) {
      req.user = user;
      next();
    } else {
      next({ status: 409, message: "invalid username" });
    }
  };


  module.exports = {
    bodyValidation,
    usernameAvailability,
    validateUsername,
  };