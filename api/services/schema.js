const yup = require("yup");

const authSchema = yup.object({
  username: yup
    .string()
    .trim()
    .min(5, "username must be at least 5 chars")
    .max(60, "username is too long")
    .required("username is required"),
  password: yup.string().trim().required("password is required"),
});

module.exports = { authSchema };