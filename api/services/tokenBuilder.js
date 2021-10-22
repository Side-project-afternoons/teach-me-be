const jwt = require("jsonwebtoken");
const {jwt_secret} = require("../../config");

const tokenBuilder = (user) => {
  const payload = {
    subject: user.user_id,
    username: user.username,
  };
  const options = {
    expiresIn: "1d",
  };
  const token = jwt.sign(payload, jwt_secret, options);
  return token;
};

module.exports = tokenBuilder;